class Spaceship {

    constructor(name, crew, phasers, shields, cloaked=false, warpDrive='disengaged', phasersCharge="uncharged") {
        this.name = name
        this.crew = crew
        this.phasers = phasers
        this. shields = shields
        this.cloaked = cloaked
        this.warpDrive = warpDrive
        this.docked = this.crew.length > 0 ? false : true
        this.phasersCharge = phasersCharge

        this.crew.forEach(crewMember => crewMember.currentShip = this)
    }


}
