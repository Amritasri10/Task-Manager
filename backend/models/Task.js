const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title:     { type: String, required: true },
  note:      { type: String },
  dueDate:   { type: Date },
  priority:  { type: String },
  project:   { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
