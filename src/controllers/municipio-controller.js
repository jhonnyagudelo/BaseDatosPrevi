import Municipio from '../models/Municipio';
import Departamento from '../models/Departamento';
import { Op, where } from 'sequelize';

//export const getMunicipio = async (req, res) => {
//try {
//[> convert string to integer number <]
//const pageAsNumber = Number.parseInt(req.query.pageNumber);
//const sizeAsNumber = Number.parseInt(req.query.sizeNumber);

//[> decide value of page <]
//let page = 0;
//if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
//page = pageAsNumber;
//}

//[> decide value of size <]
//let size = 10;
//if (
//!Number.isNaN(sizeAsNumber) &&
//sizeAsNumber > 0 &&
//sizeAsNumber < 10 [> Element to limit search <]
//) {
//size = sizeAsNumber;
//}

//[> search and count elements <]
//const municipio = await Municipio.findAndCountAll({
//include: {
//model: Departamento,
//},
//offset: page * size,
//limit: size,
//order: [['created_at', 'desc']],
//});
//if (!municipio.rows.length > 0)
//return res.status(404).json({
//message: 'Municipio no existe',
//data: {},
//});
//return res.json({
//message: 'Municipios encontrados',
//data: municipio,
//totalPages: Math.ceil(municipio.count / size),
//});
//} catch (e) {
//res.status(500).json({
//message: 'Lo sentimos no se hay resultados',
//data: {},
//err: e,
//});
//}
//};

export const getMunicipio = async (req, res) => {
  try {
    const municipio = await Municipio.findAll({
      include: [{ model: Departamento }],
    });
    if (!municipio.length > 0)
      return res
        .status(404)
        .json({ message: 'Municipio dont exists', data: [] });

    res.json({ message: 'Municipio find successfully', data: municipio });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: [], err: e });
  }
};

export const getMuniciopioById = async (req, res) => {
  try {
    const { id } = req.params;
    const municipio = await Municipio.findOne({
      where: { id },
      include: {
        model: Departamento,
        atributes: [],
      },
    });
    if (!municipio)
      return res.status(404).json({
        message: 'Municipio no existe',
        data: {},
      });
    return res.json({
      message: 'Municipio encontrado',
      data: municipio,
    });
  } catch (e) {
    res.status(404).json({
      message: 'Lo sentimos no se encontro el municipio',
      data: {},
      err: e,
    });
  }
};

export const municipioBydepartamento = async (req, res) => {
  try {
    const { departamentoId } = req.params;
    const municipio = await Municipio.findAll({
      include: { model: Departamento },
      where: { departamento_id: { [Op.eq]: departamentoId } },
    });
    if (!municipio)
      return res.status(404).json({
        message: 'Municipio no existe',
        data: {},
      });
    return res.json({
      message: 'Municipios encontrados',
      data: municipio,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};

export const createMunicipio = async (req, res) => {
  try {
    const { departamento_id, codigo, nombre } = req.body;
    const newMunicipio = await Municipio.create(
      {
        departamento_id,
        codigo,
        nombre,
      },
      {
        fields: ['departamento_id', 'codigo', 'nombre'],
      }
    );
    return res.json({
      message: 'Municipio creado',
      data: newMunicipio,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no se pudo guardar la informacion',
      data: {},
      err: e,
    });
  }
};

export const updateMunicipioById = async (req, res) => {
  try {
    const { id } = req.params;
    const { departamento_id, codigo, nombre, estado } = req.body;
    const updateMunicipio = await Municipio.findOne({ where: { id } });
    if (updateMunicipio) {
      await updateMunicipio.update(
        {
          departamento_id,
          codigo,
          nombre,
          estado,
        },
        { where: { id } }
      );
      return res.json({
        message: 'Actualizacion completada',
        data: updateMunicipio,
      });
    } else {
      return res.status(404).json({
        message: 'El municipio no existe',
        data: {},
      });
    }
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no se actualizo',
      data: {},
      err: e,
    });
  }
};

export const deleteMunicipio = async (req, res) => {
  try {
    const { id } = req.params;
    const municipio = await Municipio.findOne({ where: { id } });
    if (municipio) {
      await Municipio.destroy({ where: { id } });
      res.json({
        message: 'Municipio eliminado',
        data: municipio,
      });
    } else {
      res.status(404).json({
        message: 'No existe',
      });
    }
  } catch (e) {
    res.json({
      message: 'Lo sentimos no se pudo eliminar',
      data: {},
      err: e,
    });
  }
};
