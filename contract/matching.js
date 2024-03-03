// Example data structures
let couriers = [
    { id: "courier1", available: true, location: "LocationA", deliveryType: "Type1" },
    { id: "courier2", available: true, location: "LocationB", deliveryType: "Type2" },
    // Add more couriers as needed
  ];
  
  let deliveryRequests = [
    { id: "request1", location: "LocationA", deliveryType: "Type1", status: "open" },
    { id: "request2", location: "LocationB", deliveryType: "Type2", status: "open" },
    // Add more delivery requests as needed
  ];
  
  // Function to find a suitable courier for a delivery request
  function findSuitableCourier(request) {
    for (let courier of couriers) {
      if (courier.available && courier.location === request.location && courier.deliveryType === request.deliveryType) {
        // Match found
        return courier.id;
      }
    }
    // No suitable courier found
    return null;
  }
  
  // Function to match delivery requests with couriers
  function matchDeliveries() {
    for (let request of deliveryRequests) {
      if (request.status === "open") {
        const matchedCourierId = findSuitableCourier(request);
        if (matchedCourierId) {
          console.log(`Request ${request.id} is matched with Courier ${matchedCourierId}`);
          // Update the request and courier statuses accordingly
          request.status = "matched";
          // Find the courier object and update its availability or other relevant fields
          let matchedCourier = couriers.find(courier => courier.id === matchedCourierId);
          matchedCourier.available = false; // Assuming the courier is now occupied
          // Additional logic to handle the match, such as updating databases or notifying users
        } else {
          console.log(`No suitable courier found for Request ${request.id}`);
          // Logic to handle the case where no match is found, such as notifying the user or escalating the request
        }
      }
    }
  }
  
  // Execute the matching process
  matchDeliveries();
  