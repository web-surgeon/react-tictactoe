(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(8),i=n.n(r),o=n(9),u=n(1),l=n(2),c=n(4),h=n(3),m=n(5),p=n(6);function v(e){return e?"latest-move":""}var g=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getButtonClasses",value:function(){var e=["square",v(this.props.selectedMove)];return this.props.value||e.push("available"),this.props.winningSquare&&e.push("winning-square"),e.join(" ")}},{key:"render",value:function(){return s.a.createElement("button",{className:this.getButtonClasses(),onClick:this.props.onClick},this.props.value)}}]),t}(s.a.Component),f=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"isWinningSquare",value:function(e){return this.props.winningLine&&this.props.winningLine.includes(e)}},{key:"renderSquare",value:function(e){var t=this;return s.a.createElement(g,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)},selectedMove:this.props.move===e,winningSquare:this.isWinningSquare(e),key:e})}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,Object(p.a)(Array(3)).map((function(t,n){return s.a.createElement("div",{className:"board-row",key:n},Object(p.a)(Array(3)).map((function(t,a){return e.renderSquare(3*(n+1)-(3-a))})))})))}}]),t}(s.a.Component),k=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).totalRowsCols=3,n.totalSquares=n.totalRowsCols*n.totalRowsCols,n.state={history:[{squares:Array(n.totalSquares).fill(null)}],stepNumber:0,xIsNext:!0},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice(),a=this.getMarker(),s=e%this.totalRowsCols+1,r=Math.floor(e/this.totalRowsCols)+1;if(!n[e]){if(this.state.winningLine)return!1;n[e]=a,this.calculateWinner(n)&&this.setState({winningLine:this.calculateWinner(n)}),this.setState({history:t.concat([{squares:n,posX:s,posY:r,marker:a,i:e}]),stepNumber:t.length,xIsNext:!this.state.xIsNext})}}},{key:"getMarker",value:function(){return this.state.xIsNext?"X":"0"}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"getMoveList",value:function(){var e=this;return this.state.history.map((function(t,n){if(!t.marker)return!1;var a="Go to move #".concat(n,"  (").concat(t.marker," - ").concat(t.posY).concat(["","A","B","C"][t.posX],")");return s.a.createElement("button",{key:n,className:v(e.state.stepNumber===n),onClick:function(){return e.jumpTo(n)}},a)}))}},{key:"calculateWinner",value:function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(o.a)(t[n],3),s=a[0],r=a[1],i=a[2];if(e[s]&&e[s]===e[r]&&e[s]===e[i])return t[n]}return null}},{key:"getGameHistory",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.state.history;return e?t[e]:t.slice(-1).pop()}},{key:"getWinningMarker",value:function(e){var t=this.calculateWinner(e),n=this.getGameHistory();return!!t&&n.marker}},{key:"getBoardStatus",value:function(e){return e?"And the winner is <span>"+e+"</span>":this.state.history.length>this.totalSquares?"Well, looks like the game finished in a <span>tie</span>":"The next move belongs to <span>"+this.getMarker()+"</span>"}},{key:"render",value:function(){var e=this,t=this.getGameHistory(this.state.stepNumber),n=this.getWinningMarker(t.squares),a=this.getBoardStatus(n),r=this.getMoveList();return s.a.createElement("div",{className:"game-container"},s.a.createElement("div",{className:"game-status",dangerouslySetInnerHTML:{__html:a}}),s.a.createElement("div",{className:"game "+(n?"done":"active")},s.a.createElement("div",{className:"game-board"},s.a.createElement(f,{squares:t.squares,move:t.i,onClick:function(t){return e.handleClick(t)},winningLine:this.state.winningLine})),s.a.createElement("div",{className:"game-info"},s.a.createElement("h5",null,"Game History"),s.a.createElement("div",null,r))))}}]),t}(s.a.Component);n(15);i.a.render(s.a.createElement(k,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.136a8428.chunk.js.map