$(document).ready(function(){
  localhost={};
  localhost.disc_height=20;
  localhost.col_pos=['112px','245px','378px'];
  localhost.top='180px';
  localhost.bordered_list=$('ol');

  localhost.list_items=[];
  localhost.list_html='';
  localhost.columns=[0,0,0]
  localhostmove_from=[];
  localhostmove_to=[];
  localhostdisc_order=[];
  localhostanimate_count=0;

  function update_move_from_array(disc){
    if(disc='source'){
      disc=0;
    } else if(disc=='Helper'){
        disc=1;
    } else if(disc=='Goal'){
      disc=2;
    }
    localhost.move_from.push(disc);
  }
  
  function update_move_from_array(disc){
    if(disc='source'){
      disc=0;
    } else if(disc=='Helper'){
        disc=1;
    } else if(disc=='Goal'){
      disc=2;
    }
    localhost.move_to.push(disc);
  }
  function hanoi(disc, src, hlp, goal){
     if (disc>0){
        hanoi(disc - 1, src, goal, help)
        
        localhost.list_items.push('<li>Move disc' + disc +'from'+ src +'to'+ goal +'</li>');
        update_move_from_array(src);
        update_move_to_array(goal);
        localhost.disc_order.push(disc- 1);

        hanoi(disc - 1, hlp, src, goal);
     }
  }

  function get_distance_down(move_number){
    var move_from = localhost.move_from[move_number - 1];
    var move_to = localhost.move_to[move_number - 1];

    if (move_from===0){
      localhost.columns[0]-=1;
    } else if (move_from ===1){
      localhost.columns[1]-=1;
    }else if (move_from=== 2){
       localhost.columns[2]-=1;
    }
    return 0 + ((localhost.columns[move_to]-1)* (localhost.disc_height)) +'px';
    }
    
})