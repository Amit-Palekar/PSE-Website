function makeBrothers(a){let e="<div class='container-fluid centered'>";for(let i=0;i<a.length;i+=5){let p=a.slice(i,Math.min(a.length,i+5));for(j of p)null!=j&&("pselogo2.png"==j[1]||"Emily Wu"==j[0]||"Amanda Di"==j[0]?e+='<div class="frame"><div class="profile" style="background-image: url(./assets/'+j[1]+');"></div><p>'+j[0]+"</p></div>":e+='<div class="frame"><div class="profile" style="background-image: url(https://res.cloudinary.com/berkeleypse-tech/image/upload/fl_force_strip.progressive,q_auto:best/brothers/'+j[1]+');"></div><p>'+j[0]+"</p></div>")}return e+="</div>"}function last_name_comparator(a,e){return a=String(a[0].split(" ").pop()),e=String(e[0].split(" ").pop()),a.localeCompare(e)}$(document).ready(function(){[["Simone Ong","simone_ong.jpg","simone_ong2.jpg"],["Miles Yun","miles_yun.jpg","miles_yun2.jpg"],["Reshma Belur","reshma_belur.jpg","reshma_belur.jpg"],["Ankur Chadha","ankur_chadha.jpg","simone_ong2.jpg"],["Santosh Tatipamula","santosh_tatipamula.jpg","santosh_tatipamula.jpg"],["Violet Carter","violet_carter.jpg","violet_carter.jpg"],["Amy Cha","amy_cha.jpg","amy_cha.jpg"]].sort(last_name_comparator);let a=[["John Van","john_van.jpg","john_van.jpg"],["Liona Li","liona_li.jpg","liona_li.jpg"],["Olivia Lee","olivia_lee.jpg","olivia_lee.jpg"],["Reshma Belur","reshma_belur.jpg","reshma_belur.jpg"],["Amy Tran","amy_tran.jpg","amy_tran.jpg"],["Britney Yip","britney_yip.jpg","britney_yip.jpg"],["Emily Wu","emily_wu.jpg","emily_wu.jpg"],["Natalia Brusco","natalia_brusco1.jpg","natalia_brusco.jpg"],["Priyanka Vatturi","priyanka_vatturi.jpg","priyanka_vatturi.jpg"],["Adrian Chiu","adrian_chiu.jpg","adrian_chiu.jpg"],["Amanda Di","amanda_di.jpg","amanda_di.jpg"],["Christopher  Diaz","christopher_diaz.jpg","christopher_diaz.jpg"]["jessie_lee.jpg"],["Julia Ide","julia_ide.jpg","julia_ide.jpg"],["Miles Yun","miles_yun.jpg","miles_yun2.jpg"],["Santosh Tatipamula","santosh_tatipamula.jpg","santosh_tatipamula.jpg"],["Ankur Chadha","ankur_chadha.jpg","ankur_chadha.jpg"],["Franklin Ye","franklin_ye.jpg","franklin_ye.jpg"],["Isabelle Osorio","isabelle_osorio.jpg","isabelle_osorio.jpg"],["Julia Nuttall-Smith","julia_nuttall_smith.jpg","julia_smith.jpg"],["Miki Chen","miki_chen.jpg","miki_chen.jpg"],["Amy Cha","amy_cha.jpg","amy_cha.jpg"],["Violet Carter","violet_carter.jpg","violet_carter.jpg"],["Simone Ong","simone_ong.jpg","simone_ong2.jpg"],["Jessica Yu","jessica_yu.jpg","jessica_yu.jpg"],["Neal Kothari","neal_kothari.jpg","neal_kothari.jpg"],["Damon Ong","damon_ong.jpg","damon_ong.jpg"],["Sophia Zhang","sophia_zhang.jpg","sophia_zhang.jpg"],["Chloe Purnama","chloe_purnama.jpg","chloe_purnama.jpg"],["Nora Lam","nora_lam.jpg","nora_lam.jpg"],["Luke Elam","luke_elam.jpg","luke_elam.jpg"],["Sarah Yoon","sarah_yoon.jpg","sarah_yoon.jpg"],["Alan Lin","pselogo2.png","alan_lin.jpg"],["Anirudh Kamath","pselogo2.png","anirudh_kamath.jpg"],["Amit Palekar","pselogo2.png","amit_palekar.jpg"],["Anni Wang","pselogo2.png","anni_wang.jpg"],["Cori Anne Montero","pselogo2.png","cori_montero.jpg"],["Euna Jo","pselogo2.png","euna_jo.jpg"],["I-Jung Lin","pselogo2.png","i-jung_lin.jpg"],["Katherine Gan","pselogo2.png","katherine_gan.jpg"],["Noel Hayward","pselogo2.png","noel_hayward.jpg"],["Ryan Li","pselogo2.png","ryan_li.jpg"],["Sierra Liu","pselogo2.png","sierra_liu.jpg"]];a.sort(last_name_comparator),$("#brothers-section").append(makeBrothers(a))});