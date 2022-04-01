import mongoose from 'mongoose';

const rolesSchema = mongoose.Schema({
  // code: { type: String, required: true },
  name: { type: String, required: true },
  permissions: { type: [String] },
});

const rolesModel = mongoose.model('roles', rolesSchema);

export default rolesModel;
