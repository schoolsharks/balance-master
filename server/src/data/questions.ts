export const TOTAL_QUESTIONS = 10;
export const BASE_TRUST_SCORE = 50;
export const BASE_TIME = 200;

export enum ChoiceTypes {
  OPTIMAL = "OPTIMAL",
  ACCEPTABLE = "ACCEPTABLE",
  SUB_OPTIMAL = "SUB_OPTIMAL",
}

export const questions = [
  // Scenario 1
  {
    id: "1",
    question:
      "It’s Thursday evening, and the Deputy Treasurer from “The Company” requests a list of accounts and balances in 6 key markets (3 in Europe: UK, Ireland, Netherlands, and 3 in Asia: Hong Kong, Singapore, Australia). They’re reviewing partners.",
    options: [
      {
        option: "A",
        optionText:
          "Reach out to each respective local Sales Manager in Europe & Asia to obtain balances.",
        timeCost: 24,
        trustShift: -6,
        choise: ChoiceTypes.SUB_OPTIMAL,
        scenarioEndPopup: null,
        colleguesTime: true,
      },
      {
        option: "B",
        optionText:
          "Go into <b>Insights</b> to quickly extract balances for the 6 markets.",
        timeCost: 0.3,
        trustShift: 8,
        choise: ChoiceTypes.OPTIMAL,
        scenarioEndPopup: null,
        colleguesTime: false,
      },
    ],
  },
  {
    id: "1A",
    question:
      "Next day arrives. Europe data is incomplete, HK & SG responded, but the Aussie manager is busy. Partial info only. Ms Tan is awaiting your next step.",
    options: [
      {
        option: "A",
        optionText:
          "Send Ms. Tan what you have, clarifying European data is incomplete and remaining data arrives in 2 days.",
        timeCost: 48,
        trustShift: -6,
        choise: ChoiceTypes.SUB_OPTIMAL,
        scenarioEndPopup:
          "You do provide immediate partial data, so Ms Tan is not angry, but she notices the gaps and starts to doubt your competence.",
        colleguesTime: false,
      },
      {
        option: "B",
        optionText:
          "Ask your Service Manager to find the missing data",
        timeCost: 1,
        trustShift: 1,
        choise: ChoiceTypes.ACCEPTABLE,
        scenarioEndPopup:
          "Realizing the local sales managers are slow, you pivot to the Service Manager for help retrieving the data. Your quick thinking boosts the Trust score, but why didn’t you use Insights and save everyone time?”",
        colleguesTime: true,
      },
    ],
  },
  {
    id: "1B",
    question:
      "You used Insights for 6 markets. Ms Tan is thrilled, but she forgot to mentioned she also needed the Indian entity balances too.  You’re on the road and won’t be back until late evening (bearing in mind India is 12 hours ahead). What do you do?",
    options: [
      {
        option: "A",
        optionText:
          "Call Local Sales Manager 'Your Friend' in India, to get a quick but possibly unverified. Response",
        timeCost: 0.1,
        trustShift: -6,
        choise: ChoiceTypes.SUB_OPTIMAL,
        scenarioEndPopup:
          "Leveraging your network can be an excellent approach, but it can delay things and takes up others’ time.  Also, how do you verify the accuracy of the data?  Ms Tan’s trust is at stake!",
        colleguesTime: true,
      },
      {
        option: "B",
        optionText:
          "You inform Ms Tan you’ll share data in 6 hours, sending a polite holding reply.  When back, dive into Insights and send the data.",
        timeCost: 6,
        trustShift: 4,
        choise: ChoiceTypes.OPTIMAL,
        scenarioEndPopup:
          "She loves the holding reply and the fact you can turn the data around quickly builds trust even further.  Ms Tan is beginning to like you!",
        colleguesTime: false,
      },
    ],
  },

  // Scenario 2
  {
    id: "2",
    question:
      "While “The Company” is implementing a new TMS, they consider an acquisition funded by Japanes Yen. Ms Tan needs the Yen balance in their US-based Yen account.",
    options: [
      {
        option: "A",
        optionText: "Log into Insights to retrieve the data and send to Ms Tan",
        timeCost: 0.1,
        trustShift: 5,
        choise: ChoiceTypes.OPTIMAL,
        scenarioEndPopup: null,
        colleguesTime: false,
      },
      {
        option: "B",
        optionText:
          "You email a local Relationship Manager to ask for help (You also want to build repo with him).",
        timeCost: 24,
        trustShift: -6,
        choise: ChoiceTypes.SUB_OPTIMAL,
        scenarioEndPopup: null,
        colleguesTime: true,
      },
    ],
  },
  {
    id: "2A",
    question:
      "Ms Tan is super impressed; no final decision yet, but wants daily Yen balances for the next 7 days.",
    options: [
      {
        option: "A",
        optionText: "Take Charge – use Insights to set up a daily report to send to Ms Tan",
        timeCost: 2,
        trustShift: 6,
        choise: ChoiceTypes.OPTIMAL,
        scenarioEndPopup:
          "You can use Insights for this data and win trust with Ms Tan by providing this data.  However, you could also show her how to self-serve this data using HSBCnet?",
        colleguesTime: false,
      },
      {
        option: "B",
        optionText:
          "Ask the Relationship Manager to help and provide Ms Tan with the data for the next 7 days",
        timeCost: 24,
        trustShift: 0,
        choise: ChoiceTypes.ACCEPTABLE,
        scenarioEndPopup:
          "The Relationship Manager gets distracted and misses a couple of days, requiring Ms Tan to have to chase.  ",
        colleguesTime: true,
      },
    ],
  },
  {
    id: "2B",
    question:
      "The local RM passed on the work to the support team. Ms Tan grows uneasy. How do you fix it?",
    options: [
      {
        option: "A",
        optionText: "Rush Request to Client Service to lead the conversation.",
        timeCost: 6,
        trustShift: -1,
        choise: ChoiceTypes.ACCEPTABLE,
        scenarioEndPopup:
          "Ms Tan receives routine updates but occasionally notices communication delays.",
        colleguesTime: true,
      },
      {
        option: "B",
        optionText:
          "Escalate to Liquidity Team for their support, You still be the face",
        timeCost: 24,
        trustShift: -6,
        choise: ChoiceTypes.SUB_OPTIMAL,
        scenarioEndPopup:
          "Too many intermediaries can cause further delays, fuelling Ms Tan’s impatience and reducing trust.",
        colleguesTime: true,
      },
    ],
  },

  //   Scenario 3

  {
    id: "3",
    question:
      "You’ve just been assigned to ‘Company Z,’ a group entity of ‘The Company’ that was formerly managed by a Sales Manager who recently left. Ms Tan mentions a prior discussion about routing 2,000 additional wires (MT103) from the US to the UK at the current price point. Since you’re unfamiliar with this entity’s wire pricing, Ms Tan expects a swift solution.",
    options: [
      {
        option: "A",
        optionText: "Ask your line manager if they still have the pricing approvals from the previous sales manager",
        timeCost: 6,
        trustShift: -3,
        choise: ChoiceTypes.SUB_OPTIMAL,
        scenarioEndPopup: null,
        colleguesTime: true,
      },
      {
        option: "B",
        optionText:
          "Use Insights - Pull the wire pricing for that entity from Insights.",
        timeCost: 1,
        trustShift: 4,
        choise: ChoiceTypes.OPTIMAL,
        scenarioEndPopup: null,
        colleguesTime: false,
      },
    ],
  },
  {
    id: "3A",
    question:
      "You hear nothing back from you line manager (must be on the golf course again!). By 8 PM, you still lack wire pricing. Ms Tan’s patience is wearing thin. You must pick a fresh approach quickly.",
    options: [
      {
        option: "A",
        optionText:
          "Seek help from Local Billing team and respond to Ms Tan",
        timeCost: 6,
        trustShift: 1,
        choise: ChoiceTypes.ACCEPTABLE,
        scenarioEndPopup:
          "You saved it.  Another delay might have swayed the decision in the competition's (Alpha Bank) favour.  But the billing team are getting sick of rushed requests for help late at night!",
        colleguesTime: true,
      },
      {
        option: "B",
        optionText:
          "Send a hastening email to your Line Mnager asking them to reply directly to Ms Tan when they get the message.",
        timeCost: 12,
        trustShift: -5,
        choise: ChoiceTypes.SUB_OPTIMAL,
        scenarioEndPopup:
          "Ms Tan dislikes any delay, yet you need more time, and Alpha Bank’s influence keeps growing. What else could you have done?",
        colleguesTime: true,
      },
    ],
  },
  {
    id: "3B",
    question:
      "You are realizing the power of using Insights.  Do you…",
    options: [
      {
        option: "A",
        optionText:
          "Ask colleagues if they are using Insights and, if not, show them how you are using it",
        timeCost: 24,
        trustShift: 5,
        choise: ChoiceTypes.OPTIMAL,
        scenarioEndPopup:
          "Share the knowledge – help others to be as efficient as you.",
        colleguesTime: false,
      },
      {
        option: "B",
        optionText:
          "Keep it to yourself",
        timeCost: 2,
        trustShift: -1,
        choise: ChoiceTypes.SUB_OPTIMAL,
        scenarioEndPopup:
          "Share the knowledge – help others to be as efficient as you.",
        colleguesTime: false,
      },
    ],
  },

  //   Scenario 4

  {
    id: "4",
    question:
      "In a team meeting, a colleague shared how they successfully won additional revenue by noticing balances were being held quite high in their client's accounts and suggesting deposits to get a better yield on that cash.  You decide to try it for 'The Company' to build Ms Tan's trust.",
    options: [
      {
        option: "A",
        optionText:
          "You dive into Insights and pull up balance data for the previous month.  You see over 15M SGD is consistently being held in one of the accounts and book a call with Ms Tan to share ideas around Deposits or other ways to get a better yield on that cash",
        timeCost: 6,
        trustShift: 3,
        choise: ChoiceTypes.OPTIMAL,
        scenarioEndPopup: null,
        colleguesTime: false,
      },
      {
        option: "B",
        optionText:
          `You email the billing team for a month's data on all of "The Company's" accounts.`,
        timeCost: 0.1,
        trustShift: -2,
        choise: ChoiceTypes.SUB_OPTIMAL,
        scenarioEndPopup: null,
        colleguesTime: true,
      },
    ],
  },
  {
    id: "4A",
    question:
      "Ms Tan has accepted the call.  To prepare you…",
    options: [
      {
        option: "A",
        optionText:
          "Using accurate data, prepare a pitch to demonstrate how much more yield Ms Tan could be making on her funds",
        timeCost: 2,
        trustShift: 8,
        choise: ChoiceTypes.OPTIMAL,
        scenarioEndPopup:
          "Ms Tan is seriously impressed!",
        colleguesTime: false,
      },
      {
        option: "B",
        optionText:
          "Pull a generic 'Deposits' slide from a previous pitch and prepare to talk around that.",
        timeCost: 18,
        trustShift: 1,
        choise: ChoiceTypes.ACCEPTABLE,
        scenarioEndPopup:
          "Ms Tan likes the proactive thinking, but is a little underwhelmed by the pitch.  Could you have tailored to captures exactly how much she could have made if she optimized the yield?",
        colleguesTime: false,
      },
    ],
  },
  {
    id: "4B",
    question:
      "The billing team reply by saying they are incredibly busy at the moment and can this wait.  ",
    options: [
      {
        option: "A",
        optionText:
          "You dive into Insights and pull up balance data for the previous month.  You see over 15M SGD is consistently being held in one of the accounts and book a call with Ms Tan to share ideas around Deposits or other ways to get a better yield on that cash",
        timeCost: 8,
        trustShift: 6,
        choise: ChoiceTypes.OPTIMAL,
        scenarioEndPopup: "Getting there - still a good outcome is in stall, but why not use Insights from the beginning and save the Billing team's time?",
        colleguesTime: false,
      },
      {
        option: "B",
        optionText:
          "Decide its not worth the effort and get distracted by all the other things in your inbox",
        timeCost: 12,
        trustShift: -3,
        choise: ChoiceTypes.SUB_OPTIMAL,
        scenarioEndPopup:
          "What a wasted opportunity.  Had you used Insights, Ms Tan would have been super impressed and so would your boss.",
        colleguesTime: false,
      },
    ],
  },

  //   Scenario 5

  {
    id: "5",
    question:
      "With changes to interest rates and internal revenue drives, you need to re-price all your clients.  You start with 'The Company'.",
    options: [
      {
        option: "A",
        optionText:
          "You go to Insights and review all the price points, balances and volumes.  Then put an invite in for a meeting with Ms Tan",
        timeCost: 6,
        trustShift: 2,
        choise: ChoiceTypes.OPTIMAL,
        scenarioEndPopup: null,
        colleguesTime: false,
      },
      {
        option: "B",
        optionText:
          `You email the billing team for a list of prices, balances and volumes on all of "The Company's" accounts.`,
        timeCost: 0.1,
        trustShift: 0,
        choise: ChoiceTypes.ACCEPTABLE,
        scenarioEndPopup: null,
        colleguesTime: true,
      },
    ],
  },
  {
    id: "5A",
    question:
      "Ms Tan has accepted the call.  To prepare you…",
    options: [
      {
        option: "A",
        optionText:
          "You present accurate data to demonstrate the value HSBC offers 'The Company' and that the revised price points are fair.  You have also identified areas that could be improved (e.g. balances that could be invested for a better yield).",
        timeCost: 2,
        trustShift: 5,
        choise: ChoiceTypes.OPTIMAL,
        scenarioEndPopup:
          "Fair and balanced, Ms Tan accepts the new pricing without objection and is quietly impressed that you've spotted opportunties to make better use of suprlus cash.  ",
        colleguesTime: false,
      },
      {
        option: "B",
        optionText:
          "You explain that pricing needs to change to reflect a shift to fee income for the bank.  ",
        timeCost: 18,
        trustShift: 1,
        choise: ChoiceTypes.ACCEPTABLE,
        scenarioEndPopup:
          "You've done your homework on the numbers, so can defend your position when Ms Tan resists.  Could you have shown the value HSBC offers 'The Company' or even spotted opportuities to improve efficiency for Ms Tan to help with the messaging? ",
        colleguesTime: false,
      },
    ],
  },
  {
    id: "5B",
    question:
      "The billing team reply by saying that everyone is asking for the same data and they are overwhelmed.  They will get to 'The Company' when they can (estimating at least 1 months' time).",
    options: [
      {
        option: "A",
        optionText:
          "You remember a colleague mentioning the system 'Insights' and decide to have a look in there.",
        timeCost: 8,
        trustShift: 6,
        choise: ChoiceTypes.OPTIMAL,
        scenarioEndPopup:
          "You have realised the power of this tool!  All the pricing information is there, along with balances and volumes - everything you need to make a re-pricing deicsion and prepare for the call with Ms Tan.",
        colleguesTime: false,
      },
      {
        option: "B",
        optionText:
          "You go back to your Line Manager saying the billing team can't support and you will have to delay until next month",
        timeCost: 12,
        trustShift: -5,
        choise: ChoiceTypes.SUB_OPTIMAL,
        scenarioEndPopup:
          "Your boss is not happy!  There is a lot of visibility on this re-pricing exercise and everyone's feeling the pressure!  Maybe its time to explore Insights?",
        colleguesTime: true,
      },
    ],
  },
];

export const quickOmniaQuestions = [
  {
    quesId: "1",
    question: "Why is Insights not your first choice?",
    options: [
      {
        option: "A",
        optionText: "Tried it, but not a fan of the navigation.",
      },
      {
        option: "B",
        optionText: "Prefer the old-school network of friends and colleagues.",
      },
      {
        option: "C",
        optionText: "Not familiar with the tool.",
      },
    ],
  },
];
