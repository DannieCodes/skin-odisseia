$(document).ready(function(){
  
  let baseUser = $('section#nav-1 .right .saudation strong').html();
  if(baseUser === 'Anonymous') { $('section#nav-1 .right .saudation text').html('Se torne um semi-deus,');}
  else { $('section#nav-1 .right .saudation text').html('Bem-vindo de volta,'); }
  
  $('section#nav-2 .left').append($('section#nav-2 ul.linklist.navlinks li a'));
  
  $('section#nav-2 ul.linklist.navlinks, a[href="/calendar"], a[href="/faq"], a[href="/groups"], a[href="/search"]').remove();
  
  $('img#i_icon_mini_index').replaceWith('<i class="fal fa-home"></i>');
  $('img#i_icon_mini_members').replaceWith('<i class="fal fa-users"></i>');
  $('img#i_icon_mini_profile').replaceWith('<i class="fal fa-tools"></i>');
  $('img#i_icon_mini_message').replaceWith('<i class="fal fa-paper-plane"></i>');
  $('img#i_icon_mini_logout').replaceWith('<i class="fal fa-power-off"></i>');
  
  $('section#category #category-title').each(function(){
    $(this).parents('section#category').addClass($(this).html());
  });
  
  $('section#category section#foruns section.forum:not(section.névoa section.forum) .f-2 a').each(function(){
    $(this).parents('.forum').find('.f-3 .links').append(this);
  });
  
  $('section.Acervo section#foruns section.forum:first-of-type').prepend('<i class="cp cp-tree-o"></i>');
  
  $('section.Acervo section#foruns section.forum:first-of-type .f-4, section.Acervo section#foruns section.forum:first-of-type .f-5, section#category section#foruns section.forum:not(section.forum:first-of-type) .f-5 span br, img.sprite-icon_topic_latest, section.Personagem section#foruns section.forum:last-of-type .f-5 img ').remove();
  
  $('section#category section#foruns section.forum:not( section.Acervo section.forum:first-of-type, section.Personagem section.forum:last-of-type) .f-4').each(function(){
    $(this).parents('.forum').find('.f-3').append(this);
  });
   $('section#category section#foruns section.forum:not(section.Acervo section.forum:first-of-type, section.Personagem section.forum:last-of-type, section.névoa section.forum) .f-5 img').each(function(){
    $(this).parents('.forum').find('.f-2').prepend(this);
  });
  
  $('section#category section#foruns section.forum:not(section.Acervo section.forum:first-of-type, section.Personagem section.forum:last-of-type, section.névoa section.forum) .f-5').each(function(){
    $(this).parents('.forum').find('.f-1').append(this);
  });
 
  $('section.Personagem section#foruns section.forum:last-of-type .f-5').each(function(){
    $(this).parents('.forum').find('.f-1').append(this);
  });
  
   $('section.Personagem section#foruns section.forum:last-of-type .f-4').each(function(){
    $(this).parents('.forum').find('.f-1').append(this);
  });
  
  $('section.Acervo header#category-title').remove();
  
  $('section.névoa section.forum .f-5').each(function(){
    $(this).parents('.forum').find('.f-3 .links').append(this);
  });
  $('section.névoa section.forum .f-5 img').remove();
});



$('section#stat .grupos a').each(function(){
  
let colorUser = $(this).css('color');
  
$(this).attr("style", "--cor-grupo:"+colorUser+"");
});

$('a[href="/g2-staff"]').prepend('<i class="fal fa-crown"></i>');
$('a[href="/g3-npcs"]').prepend('<i class="fal fa-users"></i>');
$('a[href="/g4-zeus"]').prepend('<i class="fal fa-bolt"></i>');
$('a[href="/g5-poseidon"]').prepend('<i class="cp cp-anchor-o"></i>');
$('a[href="/g6-hades"]').prepend('<i class="fal fa-skull"></i>');
$('a[href="/g7-atena"]').prepend('<i class="cp cp-owl-o"></i>');
$('a[href="/g8-afrodite"]').prepend('<i class="cp cp-heart-o"></i>');
$('a[href="/g9-ares"]').prepend('<i class="fal fa-helmet-battle"></i>');
$('a[href="/g10-apolo"]').prepend('<i class="fal fa-music-alt"></i>');
$('a[href="/g11-demeter"]').prepend('<i class="cp cp-wheat-o"></i>');
$('a[href="/g12-dionisio"]').prepend('<i class="cp cp-grapes-o"></i>');
$('a[href="/g13-eris"]').prepend('<i class="cp cp-apple-o"></i>');
$('a[href="/g14-hefesto"]').prepend('<i class="cp cp-fire-o"></i>');
$('a[href="/g15-hermes"]').prepend('<i class="cp cp-cobra-o"></i>');
$('a[href="/g16-hipnos"]').prepend('<i class="cp cp-dreamcatcher"></i>');
$('a[href="/g17-hecate"]').prepend('<i class="cp cp-crystal-ball-o"></i>');
$('a[href="/g18-macaria"]').prepend('<i class="cp cp-gemstone-o"></i>');
$('a[href="/g19-nix"]').prepend('<i class="cp cp-stars-o"></i>');
$('a[href="/g20-persefone"]').prepend('<i class="cp cp-flower-alt-o"></i>');
$('a[href="/g21-quione"]').prepend('<i class="fal fa-snowflake"></i>');
$('a[href="/g22-legados"]').prepend('<i class="cp cp-lollipop-o"></i>');

$('a[href="/g23-cacadoras-de-artemis"]').prepend('<i class="cp cp-bow-and-arrow-o"></i>');
$('a[href="/g24-ceifadores-de-tanatos"]').prepend('<i class="cp cp-punisher-o"></i>');
$('a[href="/g25-curandeiros-de-asclepio"]').prepend('<i class="cp cp-first-aid-o"></i>');
$('a[href="/g26-espectros-de-melinoe"]').prepend('<i class="cp cp-ghost-o"></i>');
$('a[href="/g27-feiticeiras-de-circe"]').prepend('<i class="cp cp-magic-wand-o"></i>');
$('a[href="/g28-guardioes-do-tempo"]').prepend('<i class="cp cp-hourglass"></i>');

$('section#stat .basic-infos .left text').html(function(){return $(this).html().replace('O último membro registrado é', '')});
$('section#stat .basic-infos .right div').html(function(){return $(this).html().replace('Temos ', '').replace(' mensagens', '').replace(' membro registrado', '').replace(' membros registrados', '').replace('Os nossos membros postaram um total de ', '')});

$('section#stat .online-now div').html(function(){return $(this).html().replace('Usuários registrados :', '')});

let string=$('section#stat .numbers-here span.base').text();
let numbers= string.match(/\d+/g).map(Number);

$('span.total strong').html(numbers[0]);
$('span.membros strong').html(numbers[1]);
$('span.visitantes strong').html(numbers[3]);
$('span.invisiveis strong').html(numbers[2]);
