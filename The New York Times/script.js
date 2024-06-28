let nav_names = ["U.S.","World","Business","Arts","Lifestyle","opinion","Audio","Games","Cooking","Wirecutter","The Athletic"];
        let header_conteudo2 = ["U.S.","International","Canada","Espanol","中文"];
        nav_names.map((x)=>{
            document.getElementById('header3').innerHTML += `<div class='nav'> <div class='nav_conteudo'> <div class='nav_p'>${x} </div> <div class='nav_hover'></div></div> <img src="./IMGs/seta.png" alt="seta"></div>`;
        })
        header_conteudo2.map((x)=>{
            document.getElementById('header_conteudo2').innerHTML += `<div class='header_conteudo2_p'> ${x} </div>`;
        })

      