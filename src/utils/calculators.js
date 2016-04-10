

/**
 * litresRequired - Method to calculate the litres required for a dive
 * based on surface air consumption rate of the diver and the
 * depth and duration of the dive
 *
 * @param  {Number} surfaceAirConsumption The surface air consumption of the diver in Litres/Minute
 * @param  {Number} depth                 The maximum depth of the dive in Metres
 * @param  {Number} duration              The duration of the dive in Minute
 * @return {Number}                       The Litres required for the dive
 */
export function litresRequired(surfaceAirConsumption = 25, depth = 0, duration = 0) {
  return Math.floor(surfaceAirConsumption * ((depth / 10) + 1) * duration);
}


/**
 * litresAvailable - Method to caluclate the litres available for a dive based on
 * the cylinder size and pressure and taking into account the required reseve needed
 * (normally 50 Bar)
 *
 * @param  {type} cylinderSize    description
 * @param  {type} cylinerPressure description
 * @param  {type} reserveRequired description
 * @return {type}                 description
 */
export function litresAvailable(cylinderSize = 12, cylinerPressure = 220, reserveRequired = 50) {
  return Math.floor((cylinderSize * cylinerPressure) - reserveRequired);
}

export function maximumOperatingDepth(oxygenPercentage = 21, maxPO2 = 1.4) {
  return (((maxPO2 / (oxygenPercentage / 100)) - 1) * 10).toFixed(2);
}
