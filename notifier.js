let notificationPermission = Notification.permission;

console.log(`notification status is ${notificationPermission}`);

switch (notificationPermission){
    case "default":
        console.log("user has not been asked about notifications yet");
        askNotificationPermission();
        break;
    case "granted":
        console.log("user has granted permission to notifications");
        setTimeout(()=>{
            new Notification("example notification", {
                body: "hey hey!"
            })
        }, 1000);
        break;
    case "denied":
        console.log("user denied access to notifications");
        break;
    default:
        console.log("invalid notification permission");
        break;
}


function askNotificationPermission(){
    Notification.requestPermission().then((status)=>{
        console.log(status);
        notificationPermission = status;
    });
}



// console.log(Notification.requestPermission());

// Notification.requestPermission().then((result) => {
//     console.log(result);
// });