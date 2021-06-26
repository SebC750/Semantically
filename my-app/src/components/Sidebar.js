import React, { useState } from 'react';
import $ from 'jquery';

import SidebarHeader from './SidebarHeader';
import SidebarBody from './SidebarBody';
import SidebarFooter from './SidebarFooter';

import {saveAsHTML} from '../hooks/downloadAnnotations';

const Sidebar = ({ highlights, updateHighlights, currentHighlight, setCurrentHighlight, removedHighlights, updateRemovedHighlights, annotationSelection, updateAnnotationSelection }) => {
  const [showLoader, updateShowLoader] = useState(false);
  const [showAccordion, updateShowAccordion] = useState(false);
  const [annotations, updateAnnotations] = useState({});
  const [definitions, updateDefinitions] = useState({});
  const [loadHighlights, updateLoadHighlights] = useState(false);

  const resetAnnotations = () => {
    updateAnnotations({});
    updateHighlights({});
    setCurrentHighlight('');
    updateDefinitions({});
  }

  // activate downloads
  if($('body')[0].onclick === null) {
   $('#download-plain-html')[0].onclick = () => saveAsHTML(annotations, annotationSelection, false);
  }

  return (
    <div id="sidebar">
      <SidebarHeader updateShowLoader={updateShowLoader} updateShowAccordion={updateShowAccordion}
        updateAnnotations={updateAnnotations} resetAnnotations={resetAnnotations} updateLoadHighlights={updateLoadHighlights} />
      <SidebarBody showLoader={showLoader} showAccordion={showAccordion} annotations={annotations}
        updateAnnotations={updateAnnotations} definitions={definitions} updateDefinitions={updateDefinitions}
        highlights={highlights} updateHighlights={updateHighlights} loadHighlights={loadHighlights}
        updateLoadHighlights={updateLoadHighlights} currentHighlight={currentHighlight}
        setCurrentHighlight={setCurrentHighlight} removedHighlights={removedHighlights}
        updateRemovedHighlights={updateRemovedHighlights} annotationSelection={annotationSelection} updateAnnotationSelection ={updateAnnotationSelection} />
      <SidebarFooter />
    </div>
  );
}

export default Sidebar;
