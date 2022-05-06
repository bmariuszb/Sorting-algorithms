var e;
var pos;
var id=null;
var callback;
var compareColor="hsl(195, 53%, 15%)";
var okColor="hsl(120, 100%, 15%)";
var errorColor="hsl(0, 100%, 15%)";
var defaultColor="hsl(0, 0%, 10%)";
var timeAnimation=2000;

function bubble(){
    document.getElementById("playAudio").volume=0.2;
    document.getElementById("playAudio").play();
    if(typeof bubble.displayed=='undefined'){
        bubble.displayed=0;
        document.getElementById("bubble1").innerHTML=1;
    }
    if(bubble.displayed==1){
        document.getElementById("bubbleS").style.display="none";
        bubble.displayed=0;
    }
    else{
        document.getElementById("bubbleS").style.display="block";
        bubble.displayed=1;
    }
}

function animateBubble(){
    clearInterval(id);
    document.getElementById("startBubble").style.display="none";
    document.getElementById("bubble5").style.top=70+"px";
    document.getElementById("bubble1").style.top=70+"px";
    document.getElementById("bubble4").style.top=70+"px";
    document.getElementById("bubble2").style.top=70+"px";
    document.getElementById("bubble8").style.top=70+"px";
    document.getElementById("bubble5").style.left=0+"px";
    document.getElementById("bubble1").style.left=40+"px";
    document.getElementById("bubble4").style.left=80+"px";
    document.getElementById("bubble2").style.left=120+"px";
    document.getElementById("bubble8").style.left=160+"px";
    document.getElementById("bubble5").style.backgroundColor=defaultColor;
    document.getElementById("bubble1").style.backgroundColor=defaultColor;
    document.getElementById("bubble4").style.backgroundColor=defaultColor;
    document.getElementById("bubble2").style.backgroundColor=defaultColor;
    document.getElementById("bubble8").style.backgroundColor=defaultColor;
    setTimeout(() =>{
        e=[document.getElementById("bubble5").style,document.getElementById("bubble1").style];
        for(let i=0;i<e.length;i++){
            e[i].backgroundColor=compareColor;
        }
        e=document.getElementById("bubble5").style;
        callback=animateBubble2;
        clearInterval(id);
        pos=70;
        setTimeout(()=>{
            e.backgroundColor=errorColor;
            setTimeout(()=>{id=setInterval(moveUp,10);}, timeAnimation)
        }, timeAnimation);
    }, timeAnimation);
    
    
}

function animateBubble2(){
    e=[document.getElementById("bubble5").style,document.getElementById("bubble1").style];
    pos=0;
    let x=0;
    let y=40;
    id=setInterval(()=>{
        x++;
        e[0].left=x+"px";
        e[1].left=y-x+"px";
        if(x==40){
            clearInterval(id);
            animateBubble3();
        }
    },10);
}

function animateBubble3(){
    e=document.getElementById("bubble5").style;
    pos=0;
    callback=animateBubble4;
    id=setInterval(moveDown,10);
}

function animateBubble4(){
    document.getElementById("bubble1").style.backgroundColor=defaultColor;
    document.getElementById("bubble5").style.backgroundColor=compareColor;
    document.getElementById("bubble4").style.backgroundColor=compareColor;
    setTimeout(()=>{
        e=document.getElementById("bubble5").style;
        e.backgroundColor=errorColor;
        callback=animateBubble5;
        pos=70;
        setTimeout(()=>{id=setInterval(moveUp, 10);}, timeAnimation);
    },timeAnimation);
}

function animateBubble5(){
    e=[document.getElementById("bubble5").style,document.getElementById("bubble4").style];
    let x=40;
    let y=120;
    id=setInterval(()=>{
        x++;
        e[0].left=x+"px";
        e[1].left=y-x+"px";
        if(x==80){
            clearInterval(id);
            animateBubble6();
        }
    },10);
}

function animateBubble6(){
    e=e[0];
    pos=0;
    callback=animateBubble7;
    id=setInterval(moveDown, 10);
}

function animateBubble7(){
    document.getElementById("bubble4").style.backgroundColor=defaultColor;
    document.getElementById("bubble5").style.backgroundColor=compareColor;
    document.getElementById("bubble2").style.backgroundColor=compareColor;
    setTimeout(()=>{
        e=document.getElementById("bubble5").style;
        e.backgroundColor=errorColor;
        callback=animateBubble8;
        pos=70;
        setTimeout(()=>{id=setInterval(moveUp, 10);}, timeAnimation);
    },timeAnimation);
}

function animateBubble8(){
    e=[document.getElementById("bubble5").style,document.getElementById("bubble2").style];
    let x=80;
    let y=200;
    id=setInterval(()=>{
        x++;
        e[0].left=x+"px";
        e[1].left=y-x+"px";
        if(x==120){
            clearInterval(id);
            animateBubble9();
        }
    },10);
}

function animateBubble9(){
    e=e[0];
    pos=0;
    callback=animateBubble10;
    id=setInterval(moveDown, 10);
}
function animateBubble10(){
    document.getElementById("bubble2").style.backgroundColor=defaultColor;
    document.getElementById("bubble5").style.backgroundColor=compareColor;
    document.getElementById("bubble8").style.backgroundColor=compareColor;
    setTimeout(()=>{
        document.getElementById("bubble8").style.backgroundColor=errorColor;
        setTimeout(()=>{
            document.getElementById("bubble8").style.backgroundColor=okColor;
            document.getElementById("bubble5").style.backgroundColor=defaultColor;
            setTimeout(()=>{
                document.getElementById("bubble1").style.backgroundColor=compareColor;
                document.getElementById("bubble4").style.backgroundColor=compareColor;
                setTimeout(()=>{
                    document.getElementById("bubble4").style.backgroundColor=errorColor;
                    setTimeout(()=>{
                        document.getElementById("bubble1").style.backgroundColor=defaultColor;
                        document.getElementById("bubble4").style.backgroundColor=compareColor;
                        document.getElementById("bubble2").style.backgroundColor=compareColor;
                        setTimeout(()=>{
                            document.getElementById("bubble4").style.backgroundColor=errorColor;
                            e=document.getElementById("bubble4").style;
                            callback=animateBubble11;
                            pos=70;
                            setTimeout(()=>{id=setInterval(moveUp, 10);}, timeAnimation);
                        }, timeAnimation);
                    }, timeAnimation);
                },timeAnimation);
            }, timeAnimation);
        }, timeAnimation);
    }, timeAnimation);
}

function animateBubble11(){
    e=[document.getElementById("bubble4").style,document.getElementById("bubble2").style];
    let x=40;
    let y=120;
    id=setInterval(()=>{
        x++;
        e[0].left=x+"px";
        e[1].left=y-x+"px";
        if(x==80){
            clearInterval(id);
            animateBubble12();
        }
    },10);
}

function animateBubble12(){
    e=e[0];
    pos=0;
    callback=animateBubble13;
    id=setInterval(moveDown, 10);
}

function animateBubble13(){
    document.getElementById("bubble2").style.backgroundColor=defaultColor;
    document.getElementById("bubble4").style.backgroundColor=compareColor;
    document.getElementById("bubble5").style.backgroundColor=compareColor;
    setTimeout(()=>{
        document.getElementById("bubble5").style.backgroundColor=errorColor;
        setTimeout(()=>{
            document.getElementById("bubble4").style.backgroundColor=defaultColor;
            document.getElementById("bubble5").style.backgroundColor=okColor;
            setTimeout(()=>{
                document.getElementById("bubble1").style.backgroundColor=compareColor;
                document.getElementById("bubble2").style.backgroundColor=compareColor;
                setTimeout(()=>{
                    document.getElementById("bubble2").style.backgroundColor=errorColor;
                    setTimeout(()=>{
                        document.getElementById("bubble1").style.backgroundColor=defaultColor;
                        document.getElementById("bubble2").style.backgroundColor=compareColor;
                        document.getElementById("bubble4").style.backgroundColor=compareColor;
                        setTimeout(()=>{
                            document.getElementById("bubble4").style.backgroundColor=errorColor;
                            setTimeout(()=>{
                                document.getElementById("bubble4").style.backgroundColor=okColor;
                                document.getElementById("bubble2").style.backgroundColor=defaultColor;
                                setTimeout(()=>{
                                    document.getElementById("bubble1").style.backgroundColor=compareColor;
                                    document.getElementById("bubble2").style.backgroundColor=compareColor;
                                    setTimeout(()=>{
                                        document.getElementById("bubble2").style.backgroundColor=errorColor;
                                        setTimeout(()=>{
                                            document.getElementById("bubble2").style.backgroundColor=okColor;
                                            document.getElementById("bubble1").style.backgroundColor=defaultColor;
                                            setTimeout(()=>{
                                                document.getElementById("bubble1").style.backgroundColor=okColor;
                                                document.getElementById("startBubble").style.display="block";
                                            }, timeAnimation);
                                        }, timeAnimation);
                                    }, timeAnimation);
                                }, timeAnimation);
                            }, timeAnimation);
                        }, timeAnimation);
                    }, timeAnimation);
                }, timeAnimation);
            }, timeAnimation);
        }, timeAnimation);
    }, timeAnimation);
}

function moveUp(){
    pos--;
    e.top=pos+"px";
    if(pos==0){
        clearInterval(id);
        callback();
    }
}

function moveDown(){
    pos++;
    e.top=pos+"px";
    if(pos==70){
        clearInterval(id);
        callback();
    }
}

function insertion(){
    document.getElementById("playAudio").volume=0.2;
    document.getElementById("playAudio").play();
    if(typeof insertion.displayed=='undefined'){
        insertion.displayed=0;
    }
    if(insertion.displayed==1){
        document.getElementById("insertionS").style.display="none";
        insertion.displayed=0;
    }
    else{
        document.getElementById("insertionS").style.display="block";
        insertion.displayed=1;
    }
}

function animateInsertion(){
    document.getElementById("startInsertion").style.display="none";
    document.getElementById("insertion5").style.top=70+"px";
    document.getElementById("insertion1").style.top=70+"px";
    document.getElementById("insertion4").style.top=70+"px";
    document.getElementById("insertion2").style.top=70+"px";
    document.getElementById("insertion8").style.top=70+"px";
    document.getElementById("insertion5").style.left=0+"px";
    document.getElementById("insertion1").style.left=40+"px";
    document.getElementById("insertion4").style.left=80+"px";
    document.getElementById("insertion2").style.left=120+"px";
    document.getElementById("insertion8").style.left=160+"px";
    document.getElementById("insertion5").style.backgroundColor=defaultColor;
    document.getElementById("insertion1").style.backgroundColor=defaultColor;
    document.getElementById("insertion4").style.backgroundColor=defaultColor;
    document.getElementById("insertion2").style.backgroundColor=defaultColor;
    document.getElementById("insertion8").style.backgroundColor=defaultColor;
    setTimeout(()=>{
        document.getElementById("insertion5").style.backgroundColor=okColor;
        setTimeout(()=>{
            document.getElementById("insertion1").style.backgroundColor=compareColor;
            setTimeout(()=>{
                moveElementUp("insertion1", animateInsertion2);
            }, timeAnimation);   
        },timeAnimation);
    },timeAnimation);
}
function animateInsertion2(){
    moveElementLeft("insertion1",animateInsertion3);
}
function animateInsertion3(){
    document.getElementById("insertion5").style.backgroundColor=compareColor;
    setTimeout(()=>{
        document.getElementById("insertion5").style.backgroundColor=errorColor;
        setTimeout(()=>{
            moveElementRight("insertion5", animateInsertion4);
        },timeAnimation);
    },timeAnimation);
}
function animateInsertion4(){
    moveElementDown("insertion1",animateInsertion5);
}
function animateInsertion5(){
    document.getElementById("insertion1").style.backgroundColor=okColor;
    document.getElementById("insertion5").style.backgroundColor=okColor;
    setTimeout(()=>{
        document.getElementById("insertion4").style.backgroundColor=compareColor;
        setTimeout(()=>{
            moveElementUp("insertion4",animateInsertion6);
        },timeAnimation);
    },timeAnimation);
    
}
function animateInsertion6(){
    moveElementLeft("insertion4",animateInsertion7);
}
function animateInsertion7(){
    document.getElementById("insertion5").style.backgroundColor=compareColor;
    setTimeout(()=>{
        document.getElementById("insertion5").style.backgroundColor=errorColor;
        setTimeout(()=>{
            moveElementLeft("insertion4", animateInsertion8);
        },timeAnimation);
    }, timeAnimation);
}
function animateInsertion8(){
    document.getElementById("insertion1").style.backgroundColor=compareColor;
    setTimeout(()=>{
        document.getElementById("insertion4").style.backgroundColor=errorColor;
        setTimeout(()=>{
            moveElementsRight(animateInsertion9, [document.getElementById("insertion4").style,document.getElementById("insertion5").style]);
        },timeAnimation);
    },timeAnimation);
}
function animateInsertion9(){
    moveElementDown("insertion4", animateInsertion10);
}
function animateInsertion10(){
    document.getElementById("insertion1").style.backgroundColor=okColor;
    document.getElementById("insertion4").style.backgroundColor=okColor;
    document.getElementById("insertion5").style.backgroundColor=okColor;
    setTimeout(()=>{
        document.getElementById("insertion2").style.backgroundColor=compareColor;
        setTimeout(()=>{
            moveElementUp("insertion2", animateInsertion11);
        },timeAnimation);
    },timeAnimation);
}
function animateInsertion11(){
    moveElementLeft("insertion2", animateInsertion12);
}
function animateInsertion12(){
    document.getElementById("insertion5").style.backgroundColor=compareColor;
    setTimeout(()=>{
        document.getElementById("insertion5").style.backgroundColor=errorColor;
        setTimeout(()=>{
            moveElementLeft("insertion2", animateInsertion13);
        },timeAnimation);
    },timeAnimation);
}
function animateInsertion13(){
    document.getElementById("insertion4").style.backgroundColor=compareColor;
    setTimeout(()=>{
        document.getElementById("insertion4").style.backgroundColor=errorColor;
        setTimeout(()=>{
            moveElementLeft("insertion2", animateInsertion14);
        },timeAnimation);
    },timeAnimation);
}
function animateInsertion14(){
    document.getElementById("insertion1").style.backgroundColor=compareColor;
    setTimeout(()=>{
        document.getElementById("insertion2").style.backgroundColor=errorColor;
        setTimeout(()=>{
            moveElementsRight(animateInsertion15, [document.getElementById("insertion2").style, document.getElementById("insertion4").style, document.getElementById("insertion5").style]);
        },timeAnimation);
    },timeAnimation);
}
function animateInsertion15(){
    moveElementDown("insertion2", animateInsertion16);
}
function animateInsertion16(){
    document.getElementById("insertion1").style.backgroundColor=okColor;
    document.getElementById("insertion2").style.backgroundColor=okColor;
    document.getElementById("insertion4").style.backgroundColor=okColor;
    document.getElementById("insertion5").style.backgroundColor=okColor;
    setTimeout(()=>{
        document.getElementById("insertion8").style.backgroundColor=compareColor;
        setTimeout(()=>{
            moveElementUp("insertion8", animateInsertion17);
        }),timeAnimation;
    },timeAnimation);
}
function animateInsertion17(){
    moveElementLeft("insertion8", animateInsertion18);
}
function animateInsertion18(){
    document.getElementById("insertion5").style.backgroundColor=compareColor;
    setTimeout(()=>{
        document.getElementById("insertion8").style.backgroundColor=errorColor;
        setTimeout(()=>{
            moveElementRight("insertion8", animateInsertion19);
        },timeAnimation);
    },timeAnimation);
}
function animateInsertion19(){
    moveElementDown("insertion8", animateInsertion20);
}
function animateInsertion20(){
    document.getElementById("insertion5").style.backgroundColor=okColor;
    document.getElementById("insertion8").style.backgroundColor=okColor;
    document.getElementById("startInsertion").style.display="block";
}

// function moveElementLR(eid, eid2, fun){
//     e=[document.getElementById(eid).style, document.getElementById(eid2).style];
//     pos=parseInt(e[0].left,10);
//     let pos2=parseInt(e[1].left,10);
//     let nextpos=pos-40;
//     id=setInterval(()=>{
//         pos--;
//         pos2++;
//         e[0].left=pos+"px";
//         e[1].left=pos2+"px";
//         if(pos==nextpos){
//             clearInterval(id);
//             fun();
//         }
//     },10);
// }

function moveElementLeft(eid, fun){
    let e=document.getElementById(eid).style;
    let pos=parseInt(e.left,10);
    let nextpos=pos-40;
    let id=setInterval(()=>{
        pos--;
        e.left=pos+"px";
        if(pos==nextpos){
            clearInterval(id);
            fun();
        }
    },10);
}

function moveElementRight(eid, fun){
    let e=document.getElementById(eid).style;
    let pos=parseInt(e.left,10);
    let nextpos=pos+40;
    let id=setInterval(()=>{
        pos++;
        e.left=pos+"px";
        if(pos==nextpos){
            clearInterval(id);
            fun();
        }
    },10);
}

function moveElementsRight(fun, e){
    let pos=[];
    for(let i=0;i<e.length;i++){
        pos[i]=parseInt(e[i].left,10);
    }
    let nextpos=pos[0]+40;
    let id=setInterval(()=>{
        for(let i=0;i<e.length;i++){
            pos[i]++;
            e[i].left=pos[i]+"px";
        }
        if(pos[0]==nextpos){
            clearInterval(id);
            fun();
        }
    },10);
}

function moveElementDown(eid, fun){
    let e=document.getElementById(eid).style;
    let pos=0;
    let id=setInterval(()=>{
        pos++;
        e.top=pos+"px";
        if(pos==70){
            clearInterval(id);
            fun();
        }
    },10);
}

function moveElementUp(eid, fun){
    let e=document.getElementById(eid).style;
    let pos=70;
    let id=setInterval(()=>{
        pos--;
        e.top=pos+"px";
        if(pos==0){
            clearInterval(id);
            fun();
    }
    },10);
}

function heap(){
    document.getElementById("playAudio").volume=0.2;
    document.getElementById("playAudio").play();
    if(typeof heap.displayed=='undefined'){
        heap.displayed=0;
    }
    if(heap.displayed==1){
        document.getElementById("heapS").style.display="none";
        heap.displayed=0;
    }
    else{
        document.getElementById("heapS").style.display="block";
        heap.displayed=1;
    }
}

function quick(){
    document.getElementById("playAudio").volume=0.2;
    document.getElementById("playAudio").play();
    if(typeof quick.displayed=='undefined'){
        quick.displayed=0;
    }
    if(quick.displayed==1){
        document.getElementById("quickS").style.display="none";
        quick.displayed=0;
    }
    else{
        document.getElementById("quickS").style.display="block";
        quick.displayed=1;
    }
}

function merge(){
    document.getElementById("playAudio").volume=0.2;
    document.getElementById("playAudio").play();
    if(typeof merge.displayed=='undefined'){
        merge.displayed=0;
        }
    if(merge.displayed==1){
        document.getElementById("mergeS").style.display="none";
        merge.displayed=0;
    }
    else{
        document.getElementById("mergeS").style.display="block";
        merge.displayed=1;
    }
}

function selection(){
    document.getElementById("playAudio").volume=0.2;
    document.getElementById("playAudio").play();
    if(typeof selection.displayed=='undefined'){
        selection.displayed=0;
        }
    if(selection.displayed==1){
        document.getElementById("selectionS").style.display="none";
        selection.displayed=0;
    }
    else{
        document.getElementById("selectionS").style.display="block";
        selection.displayed=1;
    }
}