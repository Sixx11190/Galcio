const botao = document.getElementById("botao");
const NovoBotao = document.getElementById("NovoBotao");

botao.addEventListener('click', function() {
            // Se estiver escondido, mostra. Se estiver mosrado, esconde.
            if (NovoBotao.style.display === 'block') {
                NovoBotao.style.display = 'none';
                
                let sim = document.getElementById("sim");
                let nao = document.getElementById("nao");
                
                    
                    
                    
            } else {
                NovoBotao.style.display = 'block';
            }
        });
        
    nao.addEventListener('click', function () {
                    if (NovoBotao.style.display === 'block') {
                        NovoBotao.style.display = 'none';
                    }
                        
                })
