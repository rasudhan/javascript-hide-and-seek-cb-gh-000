
function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lis=document.querySelectorAll('.ranked-list');

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML,10)+n).toString();
  }

}

function deepestChild() {
  const nodes=document.querySelectorAll('#grand-node div')


  return nodes[nodes.length-1];

}
