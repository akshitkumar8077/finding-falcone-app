export const addVehicule = (vehiclesSelected, vehicleToAdd, vehiclesList) => {
  //check if planet have already one vehicule
  const isPlanetHasVehicle = vehiclesSelected.find(
    vehicleSelected => vehicleSelected.destination === vehicleToAdd.destination
  );

  // if true update the vehicule from my selection
  if (isPlanetHasVehicle) {
    return vehiclesSelected.map(vehicleSelected =>
      vehicleSelected.destination === vehicleToAdd.destination
        ? {
            ...vehicleSelected,
            name: vehicleToAdd.name,
            max_distance: vehicleToAdd.max_distance,
            speed: vehicleToAdd.speed
          }
        : vehicleSelected
    );
  }

  //else add vehicle to selection
  return [...vehiclesSelected, vehicleToAdd];
};

export const removeVehicule = (vehiclesSelected, vehicleToRemove) => {
  return vehiclesSelected.filter(
    vehicleSelected =>
      vehicleSelected.destination !== vehicleToRemove.destination
  );
};

export const updateStock = (vehiclesList, vehicleSelected) => {
  // calcul number of same vehicule in my selection
  const qtyInCart = name =>
    vehicleSelected.filter(item => item.name === name).length;

  // return the diff between stock and number obtained
  return vehiclesList.map(item => ({
    ...item,
    remain_no:
      item.total_no - qtyInCart(item.name) > 0
        ? item.total_no - qtyInCart(item.name)
        : 0
  }));
};
