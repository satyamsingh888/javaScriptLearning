const day ='wednesday';

switch(day){
    case'monday': //day=== 'monday
    console.log('plan cource structure');
    console.log('Go to coding meetup');
    break;
    
    case'tusday':
    console.log('Prepare theory videos');
    break;
    
    case'wednesday':
    case'thursday':
    console.log('Writing code examples');
    break;

    case'friday':
    console.log('Recond Video');
    break;

    case'saturday':
    case'sunday':
    console.log('Enjoy the weekend :D');
    break;

    default:
        console.log('not a valid day!');
    
}



if(day=='monday'){
    console.log('plan cource structure');
    console.log('Go to coding meetup');
} else if(day == 'tusday'){
    console.log('Prepare theory videos');
}else if(day == 'wednesday'|| day== 'thursday'){
    console.log('Writing code examples');
}else if(day=='friday'){
    console.log('Recond Video');
}else if(day=='saturday'|| day=='sunday'){
    console.log('Enjoy the weekend :D');
}else{
    console.log('not a valid day!');
}