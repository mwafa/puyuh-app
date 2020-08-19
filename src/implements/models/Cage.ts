import moment, { Moment } from "moment"

import { ICageModel } from "../../interface/models/ICage"
import { ISchedule } from "../../interface/datas/ISchedule"

export class Cage implements ICageModel {
  private name: string
  private schedule: ISchedule[]
  private eggIn: Moment

  constructor(name: string, eggIn: Moment, secheduleTemplate: ISchedule[]) {
    this.name = name
    this.eggIn = eggIn
    this.schedule = secheduleTemplate
  }

  getName() {
    return this.name
  }

  getDay() {
    const now = moment()
    return now.diff(this.eggIn, "days")
  }

  getDayLess() {
    return this.schedule.length - this.getDay()
  }

  getCurrentTodo() {
    const idx = this.getDay()
    return this.schedule[idx]
  }

  getEggIn() {
    return this.eggIn
  }
}
