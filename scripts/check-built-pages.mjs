import {readFileSync,existsSync} from 'node:fs';
import {JSDOM} from 'jsdom';
import assert from 'node:assert/strict';
const routes=['/','/menu','/o-nas','/dostawa','/polityka-prywatnosci','/regulamin'];
const documents=new Map();
for(const route of routes){
 const file=`.next/server/app/${route==='/'?'index':route.slice(1)}.html`;
 const document=new JSDOM(readFileSync(file,'utf8')).window.document;
 documents.set(route,document);
 assert.equal(document.documentElement.lang,'pl');
 assert.equal(document.querySelectorAll('h1').length,1,`${route}: one H1`);
 assert.ok(document.querySelector('main#main-content'));
 assert.ok(document.querySelector('meta[name="description"]'));
 const canonical=document.querySelector('link[rel="canonical"]').href;
 assert.equal(new URL(canonical).pathname,route);
 const schema=JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent);
 assert.equal(schema['@type'],'Restaurant');
 assert.ok(!schema.aggregateRating,'No fabricated rating');
 for(const image of document.querySelectorAll('img')){
  assert.ok(image.hasAttribute('alt'),`Missing alt: ${route}`);
  const src=new URL(image.src,'https://polatantalya.pl');
  const local=src.pathname==='/_next/image'?src.searchParams.get('url'):src.pathname;
  assert.ok(existsSync(`public${local}`),`Missing asset: ${local}`);
 }
 const ids=[...document.querySelectorAll('[id]')].map(n=>n.id);
 assert.equal(new Set(ids).size,ids.length,`Duplicate id: ${route}`);
 console.log(`PASS ${route}: headings, metadata, JSON-LD, local images, unique IDs`);
}
for(const [route,document] of documents){
 for(const link of document.querySelectorAll('a[href]')){
  const href=link.getAttribute('href');
  if(href.startsWith('/')||href.startsWith('#')){
   const url=new URL(href,`https://polatantalya.pl${route}`);
   assert.ok(documents.has(url.pathname),`Unknown route: ${href}`);
   if(url.hash)assert.ok(documents.get(url.pathname).getElementById(decodeURIComponent(url.hash.slice(1))),`Missing anchor: ${href}`);
  }
 }
}
assert.ok(readFileSync('public/robots.txt','utf8').includes('Sitemap:'));
const sitemap=new JSDOM(readFileSync('public/sitemap.xml','utf8'),{contentType:'application/xml'}).window.document;
assert.equal(sitemap.querySelectorAll('url').length,4);
const channels=hex=>hex.match(/\w\w/g).map(c=>parseInt(c,16)/255).map(c=>c<=.04045?c/12.92:((c+.055)/1.055)**2.4);
const luminance=hex=>{const [r,g,b]=channels(hex);return .2126*r+.7152*g+.0722*b};
for(const [foreground,background] of [['1A1A1A','F2C94C'],['F2C94C','1A1A1A'],['65635d','F9F9F9'],['a62a2a','fcfbf8'],['756f62','fcfbf8']]){
 const a=luminance(foreground),b=luminance(background);const ratio=(Math.max(a,b)+.05)/(Math.min(a,b)+.05);assert.ok(ratio>=4.5,`${foreground}/${background}`);console.log(`Contrast ${foreground}/${background}: ${ratio.toFixed(2)}:1`);
}
console.log('PASS internal links, anchors, sitemap, robots and sampled text contrast pairs');
