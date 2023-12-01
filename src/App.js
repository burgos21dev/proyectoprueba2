import {CButton, CFormInput, CFormLabel, CForm, CFormSelect} from '@coreui/react'
import { useState } from 'react'

function Form(props) {
const [codigo, SetCodigo]=useState("");
const [programa, setPrograma]=useState("");
const [asignatura, setAsignatura]=useState("");
const [corte, setCorte]=useState("");
const [unidadAprendizaje, setUnidadAprendizaje]=useState("");
const [competenciaEvaluar, setCompetenciaEvaluar]=useState("");
const [marcoContextualizacion, setMarcoContextualizacion]=useState("");
const [pregunta, setPregunta]=useState("");
const [respuestaA, setRespuestaA]=useState("");
const [respuestaB, setRespuestaB]=useState("");
const [respuestaC, setRespuestaC]=useState("");
const [respuestaD, setRespuestaD]=useState("");
const [clave, setClave]=useState("");
const [evidencia, setEvidencia]=useState("");
const [justificacion, setJustificacion]=useState("");
const [docente, setDocente]=useState("");

const handleSubmit = (e) => {
  e.preventDefault()
}

return (
  <CForm onSubmit={handleSubmit}>      
      <CFormLabel htmlFor="codigo">Codigo del programa</CFormLabel>              
      <CFormInput
          type="text" 
          id="codigo" 
          value={codigo}
          onChange={e=>SetCodigo(e.target.value)}
          feedback={props.errors.codigo}
          invalid={props.errors.codigo && true}                    
      />
      <CFormLabel  htmlFor="programa" className="mt-3">Nombre del programa</CFormLabel>
      <CFormInput 
          type="text"  
          id="programa" 
          value={programa}
          onChange={e=>setPrograma(e.target.value)}  
          feedback={props.errors.programa}
          invalid={props.errors.programa && true}                    
      />
      <CFormLabel  htmlFor="asignatura" className="mt-3">Nombre de la asignatura</CFormLabel>
      <CFormInput 
          type="text"  
          id="asignatura" 
          value={asignatura}
          onChange={e=>setAsignatura(e.target.value)}
          feedback={props.errors.asignatura}
          invalid={props.errors.asignatura && true}                      
      />
      <CFormSelect className="mt-3"
                    aria-label="Corte"
                    as="select" 
                    type="select"
                    value={corte}
                    onChange={e=>setCorte(e.target.value)}
                    feedback={props.errores.corte}
                    invalid={props.errores.corte && true}                                        
                >
                    <option value="">Seleccione fecha de corte</option>
                    <option value="1">Primer previo</option>
                    <option value="2">Segundo previo</option>
                    <option value="3">Examen</option>
                    
                </CFormSelect>   

      <CFormLabel  htmlFor="unidadAprendizaje" className="mt-3">Nombre de la unidad de aprendizaje</CFormLabel>
      <CFormInput 
          type="text"  
          id="unidadAprendizaje" 
          value={unidadAprendizaje}
          onChange={e=>setUnidadAprendizaje(e.target.value)}    
          feedback={props.errors.unidadAprendizaje}
          invalid={props.errors.unidadAprendizaje && true}                  
      />
      <CFormLabel  htmlFor="competenciaEvaluar" className="mt-3">Competencia especifica por evaluar</CFormLabel>
      <CFormInput 
          type="text"  
          id="competenciaEvaluar" 
          value={competenciaEvaluar}
          onChange={e=>setCompetenciaEvaluar(e.target.value)}    
          feedback={props.errors.competenciaEvaluar}
          invalid={props.errors.competenciaEvaluar && true}                  
      />
      <CFormLabel  htmlFor="marcoContextualizacion" className="mt-3">Marco de contextualización para inferir en la pregunta</CFormLabel>
      <CFormInput 
          type="text"  
          id="marcoContextualizacion" 
          value={marcoContextualizacion}
          onChange={e=>setMarcoContextualizacion(e.target.value)}    
          feedback={props.errors.marcoContextualizacion}
          invalid={props.errors.marcoContextualizacion && true}                  
      />
      <CFormLabel  htmlFor="pregunta" className="mt-3">Pregunta o afirmación según el marco de contextualización</CFormLabel>
      <CFormInput 
          type="text"  
          id="pregunta" 
          value={pregunta}
          onChange={e=>setPregunta(e.target.value)}    
          feedback={props.errors.pregunta}
          invalid={props.errors.pregunta && true}                  
      />
      <CFormLabel  htmlFor="respuestaA" className="mt-3">Ingrese la respuesta A</CFormLabel>
      <CFormInput 
          type="text"  
          id="respuestaA" 
          value={respuestaA}
          onChange={e=>setRespuestaA(e.target.value)}    
          feedback={props.errors.respuestaA}
          invalid={props.errors.respuestaA && true}                  
      />
      <CFormLabel  htmlFor="respuestaB" className="mt-3">Ingrese la respuesta B</CFormLabel>
      <CFormInput 
          type="text"  
          id="respuestaB" 
          value={respuestaB}
          onChange={e=>setRespuestaB(e.target.value)}   
          feedback={props.errors.respuestaB}
          invalid={props.errors.respuestaB && true}                   
      />
      <CFormLabel  htmlFor="respuestaC" className="mt-3">Ingrese la respuesta C</CFormLabel>
      <CFormInput 
          type="text"  
          id="respuestaC" 
          value={respuestaC}
          onChange={e=>setRespuestaC(e.target.value)}    
          feedback={props.errors.respuestaC}
          invalid={props.errors.respuestaC && true}                  
      />
      <CFormLabel  htmlFor="respuestaD" className="mt-3">Ingrese la respuesta D</CFormLabel>
      <CFormInput 
          type="text"  
          id="respuestaD" 
          value={respuestaD}
          onChange={e=>setRespuestaD(e.target.value)}    
          feedback={props.errors.respuestaD}
          invalid={props.errors.respuestaD && true}                  
      />
      <CFormLabel  htmlFor="clave" className="mt-3">Ingrese la respuesta correcta</CFormLabel>
      <CFormInput 
          type="text"  
          id="clave" 
          value={clave}
          onChange={e=>setClave(e.target.value)}    
          feedback={props.errors.clave}
          invalid={props.errors.clave && true}                  
      />
      <CFormLabel  htmlFor="evidencia" className="mt-3">Evidencia</CFormLabel>
      <CFormInput 
          type="text"  
          id="evidencia" 
          value={evidencia}
          onChange={e=>setEvidencia(e.target.value)}    
          feedback={props.errors.evidencia}
          invalid={props.errors.evidencia && true}                  
      />
      <CFormLabel  htmlFor="justificacion" className="mt-3">Justificación de la respuesta</CFormLabel>
      <CFormInput 
          type="text"  
          id="justificacion" 
          value={justificacion}
          onChange={e=>setJustificacion(e.target.value)}    
          feedback={props.errors.justificacion}
          invalid={props.errors.justificacion && true}                  
      />
      <CFormLabel  htmlFor="docente" className="mt-3">Ingrese el nombre del docente</CFormLabel>
      <CFormInput 
          type="text"  
          id="docente" 
          value={docente}
          onChange={e=>setDocente(e.target.value)}    
          feedback={props.errors.docente}
          invalid={props.errors.docente && true}                  
      />
     

  <CButton type="submit" color="danger" className="text-white mt-4 d-block mx-auto">
      {!props.editable ? "Crear" : "Actualizar"}                
  </CButton>
</CForm>        
)


}

export  default Form

