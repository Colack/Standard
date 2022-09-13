// Code By Jack //

var cache = {
  lock: false,
  savedValue: undefined
};


// Locks an Variable 
function lock(yourVariableName) {
  
  cache.savedValue = yourVariableName;
  
  yourVariableName = undefined;
  
  cache.lock = true;
  
}

// Unlocks an Variable.
function unlock(yourVariableName) {
  
  yourVariableName = cache.savedValue;
  
  cache.savedValue = undefined;
  
  cache.lock = false;
  
}

// Reverses your Lock.
function lockPick(yourVariableName) {
  
  if (cache.lock == true) {
    
    unlock(yourVariableName);
    
  } else if (cache.lock == false) {
    
    lock(yourVariableName);
    
  }
  
}

// Checks for locks.
function lockCheck(yourVariableName) {
  
  if (cache.lock == true) {
    
    console.log("Lock is on.");
    
  } else if (cache.lock == false) {
    
    console.log("Lock is off.");
    
  }
  
}
