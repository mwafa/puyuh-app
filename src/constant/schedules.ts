import { ISchedule, ICageCondition, ITask } from "../interface/datas/ISchedule"
import { LANG } from "./lang"

const lang = LANG

// Kind of Cage Condition
const normalCage: ICageCondition = {
  temp: {
    ideal: 37.8,
    min: 37.5,
    max: 38.0,
  },
  humidity: {
    ideal: 55,
    min: 53,
    max: 60,
  },
}

const highHumidityCage: ICageCondition = {
  temp: {
    ideal: 37.8,
    min: 37.5,
    max: 38.0,
  },
  humidity: {
    ideal: 58,
    min: 55,
    max: 61,
  },
}

const highTempCage: ICageCondition = {
  ...normalCage,
  temp: {
    ideal: 38,
    min: 37.7,
    max: 38.5,
  },
}

// Kind of Cage Phase
const warming: ISchedule = {
  cageCondition: normalCage,
  alerts: [{ message: lang.alerts.dont_open, level: "danger" }],
}

const treatment: ISchedule = {
  cageCondition: normalCage,
  tasks: [
    {
      todo: lang.tasks.return_egg,
      time: "8 AM",
      isDone: false,
    },
    {
      todo: lang.tasks.return_egg,
      time: "1 PM",
      isDone: false,
    },
    {
      todo: lang.tasks.return_egg,
      time: "5 PM",
      isDone: false,
    },
  ],
}

const waiting: ISchedule = {
  cageCondition: highHumidityCage,
  alerts: [
    {
      message: lang.alerts.dont_open,
      level: "info",
    },
    {
      message: lang.alerts.let_quail_healt,
      level: "info",
    },
    {
      message: lang.alerts.humidity_helping_quail,
      level: "info",
    },
  ],
}

const getQuailTransition: ISchedule = {
  cageCondition: highTempCage,
  tasks: [
    {
      todo: lang.tasks.open_box_if_quail_healt,
      isDone: false,
    },
  ],
}

const getQuail: ISchedule = {
  cageCondition: highHumidityCage,
  tasks: [
    {
      todo: lang.tasks.open_box,
      isDone: false,
    },
  ],
}

export const SCHEDULES: ISchedule[] = [
  warming,
  warming,
  warming,
  treatment,
  treatment,
  treatment,
  treatment,
  treatment,
  treatment,
  treatment,
  treatment,
  treatment,
  treatment,
  treatment,
  waiting,
  waiting,
  getQuailTransition,
  getQuail,
]
