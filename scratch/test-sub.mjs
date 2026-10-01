function testSub(str) {
  let f = str;
  // Replace Greek / symbols
  f = f.replace(/\\sigma(?![a-zA-Z])/g, 'σ');
  f = f.replace(/\\pi(?![a-zA-Z])/g, 'π');
  f = f.replace(/\\bowtie(?![a-zA-Z])/g, '⋈');

  // Subscript with braces: _{...} -> <sub>...</sub>
  f = f.replace(/_\{([^}]+)\}/g, '<sub>$1</sub>');
  // Subscript without braces: _X or _1
  f = f.replace(/_([a-zA-Z0-9\u0370-\u03ff])/g, '<sub>$1</sub>');

  return f;
}

console.log('Test 1 (pi_X):', testSub('\\pi_X(r)'));
console.log('Test 2 (pi_{A,B}):', testSub('\\pi_{A,B}(r)'));
console.log('Test 3 (sigma):', testSub('\\sigma_{C_1}(\\sigma_{C_2}(R))'));
console.log('Test 4 (bowtie):', testSub('r \\bowtie_{(A_i = B_j)} s'));
