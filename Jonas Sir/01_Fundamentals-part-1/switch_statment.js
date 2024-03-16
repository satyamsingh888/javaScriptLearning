// Switch-------------------

const day ='thursday';

switch(day) {
    case 'monday': // day=== monday
        console.log('Plan cource structure');
        console.log('Go to COding meetup');
        break;
        case 'tuesday':
            console.log('prepare theory video');
            break;
     case 'wednesday':
        case 'thursday':
            console.log("Write code examples");
            break;
     case 'friday':
        console.log("record Videos");
        break;
      case "saturday":  
      case "sunday":
        console.log("Enjoy the weekend :)");  
        break;

        default:
            console.log("NOt a valid date");
}

// if else--------------------

if(day=== "monday"){
    console.log('Plan cource structure');
    console.log('Go to COding meetup');

} else if(day ==="tuesday"){
    console.log('prepare theory video');
}else if(day==="wednesday" || day=== "thursday"){
    console.log("Write code examples");
}else if(day ==="friday"){
    console.log("record Videos");
}else{
    console.log("Not a valid date");
}