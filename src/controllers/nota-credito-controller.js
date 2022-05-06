import { QueryTypes } from 'sequelize';
import { sequelize } from '../database/database';
import NotaCredito from '../models/NotaCredito';

export const getNotaCredito = async (req, res) => {
  try {
    const nota = await NotaCredito.findAll();
    if (!nota.length > 0)
      return res.status(404).json({
        message: 'No existen documentos contables nota credito',
        data: {},
      });
    res.json({
      message: 'Documento contable nota credito encontradas',
      data: nota,
    });
  } catch (error) {
    res.status(500).json({
      message: 'lo sentimos',
      data: {},
      err: error,
    });
  }
};

export const createNotaCredito = async (req, res) => {
  try {
    const { recaudo, n_cupo, _concepto, n_cedula, referencia, usuario } =
      req.body;
    const result = await sequelize.query(
      'SELECT * FROM f_nota_credito(?,?,?,?,?,?)',
      {
        replacements: [
          recaudo,
          n_cupo,
          _concepto,
          n_cedula,
          referencia,
          usuario,
        ],
        type: QueryTypes.SELECT,
      }
    );
    return res.json({ message: 'funciono', data: result });
  } catch (error) {
    res.status(500).json({
      message: 'lo sentimos',
      data: {},
      err: error,
    });
  }
};
