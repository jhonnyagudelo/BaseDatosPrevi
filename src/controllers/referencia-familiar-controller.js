import Referencia_familiar from '../models/ReferenciaFamiliar';
import DetalleUsuario from '../models/DetalleUsuario';
import Parentesco from '../models/Parentesco';

export const getRefeFamiliar = async (req, res) => {
  try {
    const referenciaFamiliares = await Referencia_familiar.findAll({
      include: [
        {
          model: DetalleUsuario,
          atributes: []
        },
        {
          model: Parentesco,
          atributes: []
        }
      ]
    });
    if (!referenciaFamiliares > 0)
      return res.status(404).json({
        message: 'Referencia familiar no existe',
        data: {}
      });
    return res.json({
      message: 'Referencia familiar encontradas',
      data: referenciaFamiliares
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo siento no se encontro',
      data: {},
      err: e
    });
  }
};

export const getRefeFamiliarById = async (req, res) => {
  try {
    const { id } = req.params;
    const referenciaFamiliar = await Referencia_familiar.findOne({ where: { id } });
    return res.json({
      message: 'La referencia fue encontrada',
      data: referenciaFamiliar
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no encontramos la referencia',
      data: {},
      err: e
    });
  }
};

export const createRefeFamilia = async (req, res) => {
  try {
    const {
      detalle_usuario_id,
      parentesco_id,
      nombres,
      primer_apellido,
      segundo_apellido
    } = req.body;
    const newRefeFamiliar = await Referencia_familiar.create(
      {
        detalle_usuario_id,
        parentesco_id,
        nombres,
        primer_apellido,
        segundo_apellido
      },
      {
        fields: [
          'detalle_usuario_id',
          'parentesco_id',
          'nombres',
          'primer_apellido',
          'segundo_apellido'
        ]
      }
    );
    return res.json({
      message: 'Referencia creada',
      data: newRefeFamiliar
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no pudimos guardar la informacion',
      data: {},
      err: e
    });
  }
};

export const updateRefeFamiliarById = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombres, primer_apellido, segundo_apellido, estado } = req.body;
    const updateRefeFamiliar = await Referencia_familiar.findOne({
      where: { id }
    });
    if (!updateRefeFamiliar)
      return res
        .status(404)
        .json({ message: 'referencia no existe', data: {} });
    await updateRefeFamiliar.update(
      {
        nombres,
        primer_apellido,
        segundo_apellido,
        estado
      },
      {
        where: { id }
      }
    );
    res.json({
      message: 'referencia actualizada',
      data: updateRefeFamiliar
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no se actulizo la referencia',
      data: {},
      err: e
    });
  }
};

export const deleteRefeFamiliarById = async (req, res) => {
  try {
    const { id } = req.params;
    const referenciaFamiliar = await Referencia_familiar.findOne({ where: { id } });
    if (!referenciaFamiliar)
      return res
        .status(404)
        .json({ message: 'Referencia no encontrada', data: {} });

    await Referencia_familiar.destroy({ where: { id } });
    res.json({
      message: 'Referencia eliminada satisfactoriamente',
      data: referenciaFamiliar
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos la referencia no se elimino',
      data: {},
      err: e
    });
  }
};
