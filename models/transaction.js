const { model, Schema } = require("mongoose");
const Joi = require("joi");

const transactionSchema = Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    type: {
      type: String,
      enum: ["income", "expense"],
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
    },
    sum: {
      type: Number,
      default: null,
      required: true,
    },
    balance: {
      type: Number,
      default: null,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const transactionJoiSchema = Joi.object({
  date: Joi.date().required(),
  type: Joi.string().valid("income", "expense").required(),
  category: Joi.string().required(),
  comment: Joi.string(),
  sum: Joi.number().required(),
  balance: Joi.number().required(),
});

const Transaction = model("transaction", transactionSchema);

module.exports = {
  Transaction,
  transactionJoiSchema,
};
