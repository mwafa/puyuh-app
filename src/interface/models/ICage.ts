import { ISchedule } from "../datas/ISchedule"
import { Moment } from "moment"

export interface ICageModel {
  getName: () => string
  getEggIn: () => Moment
  getDay: () => number
  getDayLess: () => number
  getCurrentTodo: () => ISchedule
}
