import Asegurado from '../models/Asegurado';
import Auxilio from '../models/Auxilio';
import Parentesco from '../models/Parentesco';
import Telefono from '../models/Telefono';
import { sequelize } from '../database/database';
import { Op } from 'sequelize';
import { QueryTypes } from 'sequelize';

export const getAsegurados = async (req, res) => {
  try {
    const asegurados = await Asegurado.findAll({
      include: [{ model: Auxilio }, { model: Parentesco }],
      order: [['created_at', 'desc']],
    });
    if (!asegurados.length > 0)
      return res
        .status(404)
        .json({ message: 'Asegurado dont exists', data: [] });

    res.json({ message: 'Asegurados find successfully', data: asegurados });
  } catch (e) {
    res.status(404).json({ message: 'Something goes wrong', data: [], err: e });
  }
};

export const getAseguradoByCupo = async (req, res) => {
  try {
    const { cupoId } = req.params;
    const asegurado = await Asegurado.findAll({
      include: [
        {
          model: Auxilio,
        },
        { model: Parentesco },
      ],
      where: { cupo_id: { [Op.eq]: cupoId } },
      order: [['created_at', 'desc']],
    });
    if (!asegurado)
      return res.status(404).json({
        message: 'asegurado no existe',
        data: {},
      });
    return res.status(200).json({
      message: 'asegurado encontrados',
      data: asegurado,
    });
  } catch (e) {
    res.json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};

export const getAseguradoById = async (req, res) => {
  try {
    const { id } = req.params;
    const asegurado = await Asegurado.findOne({
      include: [{ model: Auxilio }, { model: Parentesco }],
      where: { id },
      order: [['created_at', 'desc']],
    });
    if (!asegurado)
      return res.status(404).json({ message: 'Asegurado dont exists' });

    res.json({ message: 'Asegurado find successfully', data: asegurado });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const agregar_beneficiario = async (req, res) => {
  try {
    const {
      cupo,
      parentesco,
      beneficiario,
      edad,
      auxilio,
      detalle,
      actividad,
    } = req.body;
    const result = await sequelize.query(
      'SELECT * FROM fn_agregar_beneficiario(?,?,?,?,?,?,?)',
      {
        replacements: [
          cupo,
          parentesco,
          beneficiario,
          edad,
          auxilio || null,
          detalle || null,
          actividad || null,
        ],
        type: QueryTypes.SELECT,
      }
    );
    return res.status(200).json({
      message: 'funciono',
      data: result,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo siento',
      data: {},
      err: e,
    });
  }
};

export const createAsegurado = async (req, res) => {
  try {
    const {
      nombre,
      descripcion,
      ocupacion,
      edad,
      auxilio_id,
      parentesco_id,
      cupo_id,
    } = req.body;
    const newAsegurados = await Asegurado.create(
      {
        nombre,
        descripcion,
        ocupacion,
        edad,
        auxilio_id,
        parentesco_id,
        cupo_id,
      },
      {
        fields: [
          'nombre',
          'descripcion',
          'ocupacion',
          'edad',
          'auxilio_id',
          'parentesco_id',
          'cupo_id',
        ],
      }
    );
    return res.json({
      message: 'Asegurado created successfully',
      data: newAsegurados,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const updateAseguradoById = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, ocupacion, edad } = req.body;
    const updateAsegurado = await Asegurado.findOne({ where: { id } });
    if (!updateAsegurado)
      return res.status(404).json({ message: 'Asegurado dont exists' });

    await updateAsegurado.update({ nombre, descripcion, ocupacion, edad });
    res.json({
      message: 'Asegurado updated successfully',
      data: updateAsegurado,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const deleteAseguradosById = async (req, res) => {
  try {
    const { id } = req.params;
    const asegurado = await Asegurado.findOne({ where: { id } });
    if (!asegurado)
      return res.status(404).json({ message: 'Asegurado dont exists' });

    res.json({ message: 'Asegurado deleted successfully', data: {} });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};
