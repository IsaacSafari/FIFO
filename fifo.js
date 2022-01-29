var fifo=[];  //This is my Empty Array
var count=0;

// Push is an item in fifo[0] array
var pushItem=function(item){
    for (var i=count;i>0;i--)
    {
        fifo[i]=fifo[i-1];
    }
    fifo[0]=item;
    count++;
    console.log('push :',item,' Result:',fifo);
}

//pop an item from fifo[end] and return other items . 
var pullItem=function(){
    if (count>0) {
            count--;
            var temp=[];
            console.log('pull ',fifo[count]);
            for(var i=0;i<count;i++) {
                temp[i]=fifo[i];
        }
            fifo=temp;
            console.log('Result: ',fifo);
    }else   
        console.log('List is Empty!')
}


//test functions 
pullItem();  // pop from empty list
pushItem(1);
pushItem(2);
pushItem(3);
pullItem();   
pushItem(4);
pullItem();
pullItem();
pullItem();
pullItem(); // pop from empty list
