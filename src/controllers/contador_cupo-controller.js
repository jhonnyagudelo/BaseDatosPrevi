import ContadorCupo from '../models/ContadorCupo';

export const getContadorCupo = async (req, res) => {
  try {
    const contador = await ContadorCupo.findAll({
      order: [['created_at', 'desc']],
    });
    if (!contador.length > 0)
      return res.status(404).json({ message: 'Contador no existe', data: [] });
    res.json({
      message: 'Contador cupo encontrados',
      data: contador,
    });
  } catch (e) {
    res.status(500).json({ message: 'Lo sentimos', data: [], err: e });
  }
};
