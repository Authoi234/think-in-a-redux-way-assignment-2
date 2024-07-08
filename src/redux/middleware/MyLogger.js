const ConditionCheckerMyLogger = (store) => (next) => (action) => {
    const btn = document.getElementById("lws-addCity");
    console.log(`Action: ${JSON.stringify(action)}`);
    console.log(`Before: ${JSON.stringify(store.getState())}`);
    if(store.getState().bookings.length > 2){
        btn.disabled = true;
        return;
    }
    // pass action
     return next(action);
};

export default ConditionCheckerMyLogger;