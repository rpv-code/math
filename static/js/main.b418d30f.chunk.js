(this.webpackJsonpmath=this.webpackJsonpmath||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(6),l=a.n(r),c=(a(12),a(1)),o=a(2),i=a(4),u=a(3),m=(a(13),a(14),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={answer:"?",problem:"",resetDisplay:!1,correctAnswers:0},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.randomMathProblem()}},{key:"calcClockTime",value:function(){this.setState({answer:"What is the Answer?"})}},{key:"randomMathProblem",value:function(){var e=this,t=Math.floor(10*Math.random()),a=Math.floor(10*Math.random()),n=s.a.createElement("div",{className:"col-12 cell"},s.a.createElement("div",{className:"col-12 cell"},t," + ",a," = ",s.a.createElement("input",{className:"answerBox",type:"text",size:"4",id:"answer",autoFocus:!0,autoComplete:"off"})),s.a.createElement("div",{className:"col-12 cell"},s.a.createElement("button",{type:"button",onClick:function(){return e.checkAnswer(t,a,document.getElementById("answer").value)}},"Check Answer")));console.log("problem"+n),this.setState({problem:n})}},{key:"checkAnswer",value:function(e,t,a){var n=e+t;if(a==n){this.setState({answer:"Correct"});var s=this.state.correctAnswers+1;this.setState({correctAnswers:s}),this.setState({resetDisplay:!0})}else a!=n&&(this.setState({answer:"Wrong"}),this.setState({correctAnswers:0}))}},{key:"resetProblem",value:function(){this.setState({resetDisplay:!1}),this.setState({answer:"?"}),document.getElementById("answer").value="",this.randomMathProblem()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 cell"},s.a.createElement("h1",null,"Addition")),this.state.problem,s.a.createElement("div",{className:"col-12 cell"},s.a.createElement("h2",null," Your answer is ",this.state.answer)),s.a.createElement("div",{className:"col-12 cell"},this.state.correctAnswers>0?s.a.createElement("div",null," You have ",this.state.correctAnswers," correct answers in a row! "):null),s.a.createElement("div",{className:"col-12 cell"},this.state.resetDisplay?s.a.createElement("button",{type:"button",onClick:function(){return e.resetProblem()}},"Next Problem"):null))}}]),a}(n.Component)),h=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={answer:"?",problem:"",resetDisplay:!1,correctAnswers:0},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.randomMathProblem()}},{key:"calcClockTime",value:function(){this.setState({answer:"What is the Answer?"})}},{key:"randomMathProblem",value:function(){var e=this,t=0,a=0,n=Math.floor(10*Math.random()),r=Math.floor(10*Math.random());n>=r?(t=n,a=r):n<r&&(t=r,a=n);var l=s.a.createElement("div",{className:"col-12 cell"},s.a.createElement("div",{className:"col-12 cell"},t," - ",a," = ",s.a.createElement("input",{className:"answerBox",type:"text",size:"4",id:"answer",autoFocus:!0,autoComplete:"off"})),s.a.createElement("div",{className:"col-12 cell"},s.a.createElement("button",{type:"button",onClick:function(){return e.checkAnswer(t,a,document.getElementById("answer").value)}},"Check Answer")));console.log("problem"+l),this.setState({problem:l})}},{key:"checkAnswer",value:function(e,t,a){var n=e-t;if(a==n){this.setState({answer:"Correct"});var s=this.state.correctAnswers+1;this.setState({correctAnswers:s}),this.setState({resetDisplay:!0})}else a!=n&&(this.setState({answer:"Wrong"}),this.setState({correctAnswers:0}))}},{key:"resetProblem",value:function(){this.setState({resetDisplay:!1}),this.setState({answer:"?"}),document.getElementById("answer").value="",this.randomMathProblem()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 cell"},s.a.createElement("h1",null,"Subtraction")),this.state.problem,s.a.createElement("div",{className:"col-12 cell"},s.a.createElement("h2",null," Your answer is ",this.state.answer)),s.a.createElement("div",{className:"col-12 cell"},this.state.correctAnswers>0?s.a.createElement("div",null," You have ",this.state.correctAnswers," correct answers in a row! "):null),s.a.createElement("div",{className:"col-12 cell"},this.state.resetDisplay?s.a.createElement("button",{type:"button",onClick:function(){return e.resetProblem()}},"Next Problem"):null))}}]),a}(n.Component),d=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={answer:"?",problem:"",resetDisplay:!1,correctAnswers:0},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.randomMathProblem()}},{key:"calcClockTime",value:function(){this.setState({answer:"What is the Answer?"})}},{key:"randomMathProblem",value:function(){var e=this,t=Math.floor(10*Math.random()),a=Math.floor(10*Math.random()),n=s.a.createElement("div",{className:"col-12 cell"},s.a.createElement("div",{className:"col-12 cell"},t," + ",a," = ",s.a.createElement("input",{className:"answerBox",type:"text",size:"2",id:"answerOne",autoFocus:!0,autoComplete:"off"})," + ",s.a.createElement("input",{className:"answerBox",type:"text",size:"2",id:"answerTwo",autoFocus:!0,autoComplete:"off"})),s.a.createElement("div",{className:"col-12 cell"},s.a.createElement("button",{type:"button",onClick:function(){return e.checkAnswer(t,a,document.getElementById("answerOne").value,document.getElementById("answerTwo").value)}},"Check Answer")));console.log("problem"+n),this.setState({problem:n})}},{key:"checkAnswer",value:function(e,t,a,n){var s=e+t,r=parseInt(a)+parseInt(n);if(console.log(a),console.log(n),console.log(r),r==s){this.setState({answer:"Correct"});var l=this.state.correctAnswers+1;this.setState({correctAnswers:l}),this.setState({resetDisplay:!0})}else r!=s&&(this.setState({answer:"Wrong"}),this.setState({correctAnswers:0}))}},{key:"resetProblem",value:function(){this.setState({resetDisplay:!1}),this.setState({answer:"?"}),document.getElementById("answerOne").value="",document.getElementById("answerTwo").value="",this.randomMathProblem()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 cell"},s.a.createElement("h1",null,"Equation")),this.state.problem,s.a.createElement("div",{className:"col-12 cell"},s.a.createElement("h2",null," Your answer is ",this.state.answer)),s.a.createElement("div",{className:"col-12 cell"},this.state.correctAnswers>0?s.a.createElement("div",null," You have ",this.state.correctAnswers," correct answers in a row! "):null),s.a.createElement("div",{className:"col-12 cell"},this.state.resetDisplay?s.a.createElement("button",{type:"button",onClick:function(){return e.resetProblem()}},"Next Problem"):null))}}]),a}(n.Component),v=function(e){var t=e.source;return s.a.createElement("img",{src:"./images/".concat(t),alt:"Example",className:"w-25 m-2"})},p=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={answer:"?",problem:"",resetDisplay:!1,correctAnswers:0,numDice:2,diceImage:{diceOne:"dice_one.PNG",diceTwo:"dice_two.PNG",diceThree:"dice_three.PNG",diceFour:"dice_four.PNG",diceFive:"dice_five.PNG",diceSix:"dice_six.PNG"}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.randomMathProblem()}},{key:"calcClockTime",value:function(){this.setState({answer:"What is the Answer?"})}},{key:"randomMathProblem",value:function(){for(var e=this,t=[],a=[],n=0;n<this.state.numDice;n++)t.push(Math.floor(6*Math.random())),1===t[n]?a.push(this.state.diceImage.diceOne):2===t[n]?a.push(this.state.diceImage.diceTwo):3===t[n]?a.push(this.state.diceImage.diceThree):4===t[n]?a.push(this.state.diceImage.diceFour):5===t[n]?a.push(this.state.diceImage.diceFive):6===t[n]&&a.push(this.state.diceImage.diceSix),console.log("dice image: "+a[n]);var r=s.a.createElement("div",{className:"col-12"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6 cell"},s.a.createElement(v,{source:"dice_one.PNG",key:"dice_one.PNG"})),s.a.createElement("div",{className:"col-6 cell"},s.a.createElement("div",null,"How many?"),s.a.createElement("input",{className:"answerBox",type:"text",size:"4",id:"answer",autoFocus:!0,autoComplete:"off"}))),s.a.createElement("div",{className:"col-12 cell"},s.a.createElement("button",{type:"button",onClick:function(){return e.checkAnswer(t,document.getElementById("answer").value)}},"Check Answer")));this.setState({problem:r})}},{key:"imgTags",value:function(e){for(var t="",a=0;a<this.state.numDice;a++)t+=s.a.createElement(v,{source:e[a],key:e[a]+a});return console.log(t),s.a.createElement("div",{className:"col-12 cell"},t)}},{key:"checkAnswer",value:function(e,t){var a=e[0];if(t==a){this.setState({answer:"Correct"});var n=this.state.correctAnswers+1;this.setState({correctAnswers:n}),this.setState({resetDisplay:!0})}else t!=a&&(this.setState({answer:"Wrong"}),this.setState({correctAnswers:0}))}},{key:"resetProblem",value:function(){this.setState({resetDisplay:!1}),this.setState({answer:"?"}),document.getElementById("answer").value="",this.randomMathProblem()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 cell"},s.a.createElement("h1",null,"Dice"),s.a.createElement(v,{source:"dice_one.PNG",key:"dice_one.PNG"})),this.state.problem,s.a.createElement("div",{className:"col-12 cell"},s.a.createElement("h2",null," Your answer is ",this.state.answer)),s.a.createElement("div",{className:"col-12 cell"},this.state.correctAnswers>0?s.a.createElement("div",null," You have ",this.state.correctAnswers," correct answers in a row! "):null),s.a.createElement("div",{className:"col-12 cell"},this.state.resetDisplay?s.a.createElement("button",{type:"button",onClick:function(){return e.resetProblem()}},"Next Problem"):null))}}]),a}(n.Component),w=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("button",{className:"btn btn-secondary ButtonBox",onClick:function(){return e.props.onClick(e.props.name)}},this.props.name))}}]),a}(n.Component),y=(a(15),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={displayAddition:!1,displaySubtraction:!1,displayEquation:!1,displayDice:!1},e}return Object(o.a)(a,[{key:"handleClick",value:function(e){console.log(e),"displayAddition"===e?(this.setState({displayAddition:!0}),this.setState({displaySubtraction:!1}),this.setState({displayEquation:!1}),this.setState({displayDice:!1})):"displaySubtraction"===e?(this.setState({displaySubtraction:!0}),this.setState({displayAddition:!1}),this.setState({displayEquation:!1}),this.setState({displayDice:!1})):"displayEquation"===e?(this.setState({displayEquation:!0}),this.setState({displaySubtraction:!1}),this.setState({displayAddition:!1}),this.setState({displayDice:!1})):"displayDice"===e&&(this.setState({displayEquation:!1}),this.setState({displaySubtraction:!1}),this.setState({displayAddition:!1}),this.setState({displayDice:!0}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App container-fluid"},s.a.createElement("div",{className:"header row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("h1",null,"Hello WORLD!"),s.a.createElement("div",{className:"row"},s.a.createElement(w,{name:"Addition",onClick:function(){return e.handleClick("displayAddition")}}),s.a.createElement(w,{name:"Subtraction",onClick:function(){return e.handleClick("displaySubtraction")}}),s.a.createElement(w,{name:"Equation",onClick:function(){return e.handleClick("displayEquation")}}),s.a.createElement(w,{name:"Dice",onClick:function(){return e.handleClick("displayDice")}})))),s.a.createElement("div",{className:"mainWrapper row"},this.state.displayAddition?s.a.createElement(m,null):null,this.state.displaySubtraction?s.a.createElement(h,null):null,this.state.displayEquation?s.a.createElement(d,null):null,this.state.displayDice?s.a.createElement(p,null):null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.b418d30f.chunk.js.map