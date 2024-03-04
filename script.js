setTimeout(()=>{
    document.getElementById('number').innerHTML='10'
    setTimeout(()=>{
        document.getElementById('number').innerHTML='9' 
        setTimeout(() => {
            document.getElementById('number').innerHTML='8'
            setTimeout(() => {
                document.getElementById('number').innerHTML='7'
                setTimeout(() => {
                    document.getElementById('number').innerHTML='6'
                    setTimeout(() => {
                        document.getElementById('number').innerHTML='5'
                        setTimeout(() => {
                            document.getElementById('number').innerHTML='4'
                            setTimeout(() => {
                                document.getElementById('number').innerHTML='3'
                                setTimeout(() => {
                                    document.getElementById('number').innerHTML='2'
                                    setInterval(() => {
                                        document.getElementById('number').innerHTML='1'
                                        setTimeout(() => {
                                            document.getElementById('number').innerHTML='Happy independence day <i class="fa-solid fa-flag"></i>'
                                            
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    },1000)
},1000)