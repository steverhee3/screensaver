const container = document.getElementById('container');

const colors = ['#F8791D', '#AB5314', '#85410F', '#5F2E0B', '#FF912C', '#D97B25', '#6B2A06', '#913908', '#B8480A', '#913908', '#FF640E', '#D57051', '#AF5C42', '#D57051', '#A93A16', '#5D200C'];

const SQUARES = 1512;

for(let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseout', () => removeColor(square))
  container.appendChild(square);
  
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color
  element.style.boxShadow = ` 0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.background = '#1d1d1d'
  element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}


const squareslist = document.querySelectorAll('.square')
var key = setInterval(interval2square, 1)
var koy = setInterval(interval2square, 1)
var kiy = setInterval(interval2square, 1)
var kay = setInterval(interval2square, 1)
var ke = setInterval(interval2square, 1)
var ko = setInterval(interval2square, 1)
var ki = setInterval(interval2square, 1)
var ka = setInterval(interval2square, 1)
var ey = setInterval(interval2square, 1)
var oy = setInterval(interval2square, 1)
var iy = setInterval(interval2square, 1)
var ay = setInterval(interval2square, 1)
var e = setInterval(interval2square, 1)
var o = setInterval(interval2square, 1)
var i = setInterval(interval2square, 1)
var a = setInterval(interval2square, 1)
var skey = setInterval(interval2square, 1)
var skoy = setInterval(interval2square, 1)
var skiy = setInterval(interval2square, 1)
var skay = setInterval(interval2square, 1)
var ske = setInterval(interval2square, 1)
var sko = setInterval(interval2square, 1)
var ski = setInterval(interval2square, 1)
var ska = setInterval(interval2square, 1)
var sey = setInterval(interval2square, 1)
var soy = setInterval(interval2square, 1)
var siy = setInterval(interval2square, 1)
var say = setInterval(interval2square, 1)
var se = setInterval(interval2square, 1)
var so = setInterval(interval2square, 1)
var si = setInterval(interval2square, 1)
var sa = setInterval(interval2square, 1)
var akey = setInterval(interval2square, 1)
var akoy = setInterval(interval2square, 1)
var akiy = setInterval(interval2square, 1)
var akay = setInterval(interval2square, 1)
var ake = setInterval(interval2square, 1)
var ako = setInterval(interval2square, 1)
var aki = setInterval(interval2square, 1)
var aka = setInterval(interval2square, 1)
var aey = setInterval(interval2square, 1)
var aoy = setInterval(interval2square, 1)
var aiy = setInterval(interval2square, 1)
var aay = setInterval(interval2square, 1)
var ae = setInterval(interval2square, 1)
var ao = setInterval(interval2square, 1)
var ai = setInterval(interval2square, 1)
var aa = setInterval(interval2square, 1)
var askey = setInterval(interval2square, 1)
var askoy = setInterval(interval2square, 1)
var askiy = setInterval(interval2square, 1)
var askay = setInterval(interval2square, 1)
var aske = setInterval(interval2square, 1)
var asko = setInterval(interval2square, 1)
var aski = setInterval(interval2square, 1)
var aska = setInterval(interval2square, 1)
var asey = setInterval(interval2square, 1)
var asoy = setInterval(interval2square, 1)
var asiy = setInterval(interval2square, 1)
var asay = setInterval(interval2square, 1)
var ase = setInterval(interval2square, 1)
var aso = setInterval(interval2square, 1)
var asi = setInterval(interval2square, 1)
var asa = setInterval(interval2square, 1)
//var kay = setInterval(removesquare, .00001)
function intervalsquare() {
  const rs = getRandomSquare();
  
  setColor(rs);
}
function interval2square() {
  const rs = getRandomSquare();
  
  setColor(rs);
  
  setTimeout(() => {
    if (rs.classList.contains('active')) {
    rs.classList.remove('active');
  }
  removeColor(rs);
  }, 10);
}
function removesquare1() {
  if (rs.classList.contains('active')) {
    rs.classList.remove('active');
  }
  removeColor(rs);
}


function getRandomSquare() {
  const b= squareslist[Math.floor(Math.random() * squareslist.length)];
  b.classList.add('active');
  return b
}

function removesquare() {
  const b= squareslist[Math.floor(Math.random() * squareslist.length)];
  if (b.classList.contains('active')) {
    b.classList.remove('active');
  }
  removeColor(b);
  const a= squareslist[Math.floor(Math.random() * squareslist.length)];
  if (a.classList.contains('active')) {
    a.classList.remove('active');
  }
  removeColor(a);
  const c= squareslist[Math.floor(Math.random() * squareslist.length)];
  if (c.classList.contains('active')) {
    c.classList.remove('active');
  }
  removeColor(c);
  const d= squareslist[Math.floor(Math.random() * squareslist.length)];
  if (d.classList.contains('active')) {
    d.classList.remove('active');
  }
  removeColor(d);
  const e= squareslist[Math.floor(Math.random() * squareslist.length)];
  if (e.classList.contains('active')) {
    e.classList.remove('active');
  }
  removeColor(e);
  const f= squareslist[Math.floor(Math.random() * squareslist.length)];
  if (f.classList.contains('active')) {
    f.classList.remove('active');
  }
  removeColor(f);
  const g= squareslist[Math.floor(Math.random() * squareslist.length)];
  if (g.classList.contains('active')) {
    g.classList.remove('active');
  }
  removeColor(g);
  const h= squareslist[Math.floor(Math.random() * squareslist.length)];
  if (h.classList.contains('active')) {
    h.classList.remove('active');
  }
  removeColor(h);
  const i= squareslist[Math.floor(Math.random() * squareslist.length)];
  if (i.classList.contains('active')) {
    i.classList.remove('active');
  }
  removeColor(i);
  const j= squareslist[Math.floor(Math.random() * squareslist.length)];
  if (j.classList.contains('active')) {
    j.classList.remove('active');
  }
  removeColor(j);
  const k= squareslist[Math.floor(Math.random() * squareslist.length)];
  if (k.classList.contains('active')) {
    k.classList.remove('active');
  }
  removeColor(k);
  const l= squareslist[Math.floor(Math.random() * squareslist.length)];
  if (l.classList.contains('active')) {
    l.classList.remove('active');
  }
  removeColor(l);
  const m= squareslist[Math.floor(Math.random() * squareslist.length)];
  if (m.classList.contains('active')) {
    m.classList.remove('active');
  }
  removeColor(m);
  const n= squareslist[Math.floor(Math.random() * squareslist.length)];
  if (n.classList.contains('active')) {
    n.classList.remove('active');
  }
  removeColor(n);
  const o= squareslist[Math.floor(Math.random() * squareslist.length)];
  if (o.classList.contains('active')) {
    o.classList.remove('active');
  }
  removeColor(o);
  const p= squareslist[Math.floor(Math.random() * squareslist.length)];
  if (p.classList.contains('active')) {
    p.classList.remove('active');
  }
  removeColor(p);
  const q= squareslist[Math.floor(Math.random() * squareslist.length)];
  if (q.classList.contains('active')) {
    q.classList.remove('active');
  }
  removeColor(q);
  const r= squareslist[Math.floor(Math.random() * squareslist.length)];
  if (r.classList.contains('active')) {
    r.classList.remove('active');
  }
  removeColor(r);
  const s= squareslist[Math.floor(Math.random() * squareslist.length)];
  if (s.classList.contains('active')) {
    s.classList.remove('active');
  }
  removeColor(s);
  const t= squareslist[Math.floor(Math.random() * squareslist.length)];
  if (t.classList.contains('active')) {
    t.classList.remove('active');
  }
  removeColor(t);
  const u= squareslist[Math.floor(Math.random() * squareslist.length)];
  if (u.classList.contains('active')) {
    u.classList.remove('active');
  }
  removeColor(u);
  const v= squareslist[Math.floor(Math.random() * squareslist.length)];
  if (v.classList.contains('active')) {
    v.classList.remove('active');
  }
  removeColor(v);
  const w= squareslist[Math.floor(Math.random() * squareslist.length)];
  if (w.classList.contains('active')) {
    w.classList.remove('active');
  }
  removeColor(w);
  const x= squareslist[Math.floor(Math.random() * squareslist.length)];
  if (x.classList.contains('active')) {
    x.classList.remove('active');
  }
  removeColor(x);
  const y= squareslist[Math.floor(Math.random() * squareslist.length)];
  if (y.classList.contains('active')) {
    y.classList.remove('active');
  }
  removeColor(y);
  const z= squareslist[Math.floor(Math.random() * squareslist.length)];
  if (z.classList.contains('active')) {
    z.classList.remove('active');
  }
  removeColor(z);
  
}
