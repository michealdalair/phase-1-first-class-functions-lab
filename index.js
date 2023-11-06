
const returnFirstTwoDrivers = function(driversArray) {
    return driversArray.slice(0, 2);
  
    

};


  
    const returnLastTwoDrivers=function(driversArray){
return driversArray.slice(-2)
    }
    
  
  const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
    

    

  function createFareMultiplier(mutiply) {
    return function(fare1) {
      return fare1 * mutiply;
    };
  }


  function createFareMultiplier(multiplier){
    
    return function(fare){
        return fare* multiplier;
    }
  }

  const fareDoubler=createFareMultiplier(2);
    function createFareMultiplier(multiplier){
        return function(fare){
            return fare *multiplier;
        } 

    }
  
    
     
    
    const fareTripler=createFareMultiplier(3);
    function createFareMultiplier(multiplier){
        return function(fare){
            return fare *multiplier;
        } 

    }
  
    function selectDifferentDrivers(drivers, selectDrivers) {
        return selectDrivers(drivers);
      }

    