// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`; 
};

const mondayWork = function (action = "go to the office") {
    return `This Monday, I will ${action}.`;
};

function wrapAdjective(flare = "*") {
    return function (adjective ="special") {
        return `You are ${flare}${adjective}${flare}!`
    }
};

