import * as Yup from 'yup';
import Recipient from '../models/Recipient'

class RecipientController {
  async store(request, response) {
    const shema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      cep: Yup.string().required(),
    });

    if(!( await shema.isValid(request.body) )){
      return response.status(400).json({error: 'valid fails'});
    }

    const recipientExists = await Recipient.findOne({ where: { email: request.body.email } });
    if( recipientExists ){
      return response.status(400).json({ error: 'recipient already exists' });
    }

    const { id, name, email } = await Recipient.create(request.body);
    return response.json({ id, name, email });
  }

  async update(request, response) {
    const recipient = await Recipient.findByPk(request.userId);
    const { id, name, provider } = await recipient.update(request.body);
    return response.json({ id, name, email, provider });
  }
}

export default new RecipientController();
