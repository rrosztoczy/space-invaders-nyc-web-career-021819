class CrewMember {

constructor(position, currentShip='Looking for a Rig') {
    this.position = position
    this.currentShip = currentShip
}

engageWarpDrive() {
    return this.currentShip === 'Looking for a Rig' ? 'had no effect' : 'used it!'
}

setsInvisibility() {
    return this.currentShip === 'Looking for a Rig' ? 'had no effect' : 'used it!'
}

chargePhasers() {
    return this.currentShip === 'Looking for a Rig' ? 'had no effect' : 'used it!'
}



}
