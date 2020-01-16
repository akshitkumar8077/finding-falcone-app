export const canVehicleTravel = (vehicleMaxDistance, planetDistance) => {
  return vehicleMaxDistance < planetDistance ? 'vehicle-card--unavailable' : '';
};

export const isVehicleAvailable = vehicleTotalNo => {
  return vehicleTotalNo === 0 ? 'vehicle-card--unvailable' : '';
};

export const isVehicleSelected = (
  vehicleCard,
  vehiclesSelected,
  planetActive
) => {
  const isVehicleExist =
    vehiclesSelected &&
    vehiclesSelected.find(
      vehicleSelected =>
        vehicleSelected.name === vehicleCard.name &&
        vehicleSelected.destination === planetActive.name
    );

  return isVehicleExist ? 'vehicle-card--selected border' : '';
};

export const calculTimeTaken = (planetsSelected, vehiclesSelected) => {
  const distance = planetsSelected.map(item => item.distance);
  const speed = vehiclesSelected.map(item => item.speed);

  const totalTimeTaken = distance.reduce(
    (acc, val, i) => acc + val / speed[i],
    0
  );
  return totalTimeTaken;
};
