$(function(){
    let number;
    let op;
    $(".num").on("click",function(){
        const pushed=$(this).text();
        const now=$("#cal").val();
        if(pushed==="."&&now.includes(".")){
            return;
        }

        if(now==="0" && pushed!=="."){
            $("#cal").val(pushed);
        }else if(now==="00"&&pushed!=="."){
            $("#cal").val(pushed);
        }else if(now==="00"&&pushed==="."){
            $("#cal").val("0.");
        }else{
            $("#cal").val(now+pushed);
        }
    });

    $(".sign").on("click",function(){
        number=$("#cal").val();
        op=$(this).text();
        $("#cal").val("0");
    });

    $(".eq").on("click",function(){
        if(number==null||op==null){
            return;
        }
        const second=$("#cal").val();
        let result;
        if(op==="+"){
            result=Number(number)+Number(second);
        }
        if(op==="-"){
            result=Number(number)-Number(second);
        }
        if(op==="*"){
            result=Number(number)*Number(second);
        }
        if(op==="/"){
            result=Number(number)/Number(second);
        }
        $("#cal").val(result);
    });
    $(".ac").on("click",function(){
        $("#cal").val("0");
        number=null;
        op=null;
    });
});