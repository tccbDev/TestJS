function test2(a){
    /**
     * for this example the code is not optimized , just i was focusing on logic 
     */
    var a = a.toString();
    
    var s =0;
    for( i=0;i<a.length;i++){
    
    s+= parseInt(a[i],10);
    }
    console.log("somme"+s);
    
    if(s==3 || s==6 || s== 9){
    console.log(true);
    }else
    console.log(false);
    }