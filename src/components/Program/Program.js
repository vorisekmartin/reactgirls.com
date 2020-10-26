import React, {useState, useCallback, useEffect} from 'react';

import {
    ProgramTable,
    ProgramTableHead,
    ProgramDataHead,
    ProgramTableRow,
    ProgramTableRowH,
    ProgramTableBody,
    ProgramData,
    ProgramDataTopic,
    ProgramWrapper,
    ProgramDataRow,
    ProgramIcon
} from './Program.elements';

import { Container, Wrapper, TitleCenter } from '../reusable/styled';

const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);
  
    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
  
    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);
  
      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }
  
      return () => media.removeListener(updateTarget);
    }, []);
  
    return targetReached;
  }; 

function Program({data}) {
    const isBreakpoint = useMediaQuery(960);
    return (
        <>
            <Container lightBlue id="program" >
                <Wrapper>
                    <ProgramWrapper>
                    <TitleCenter>Program Akademie</TitleCenter>
                    </ProgramWrapper>
                </Wrapper>
            </Container>
            <Container >
                <Wrapper>
                    <ProgramWrapper>
                    <ProgramTable>
                        <ProgramTableHead>
                            <ProgramTableRowH>
                                <ProgramDataHead >Datum</ProgramDataHead>
                                <ProgramDataHead >Téma</ProgramDataHead>
                                <ProgramDataHead >Čas</ProgramDataHead>
                                <ProgramDataHead >Místo</ProgramDataHead>
                            </ProgramTableRowH>
                        </ProgramTableHead>
                        { !isBreakpoint &&  
                        <ProgramTableBody>
                            {data.map((item) => {
                                return(
                                    <ProgramTableRow key={item.topic} data={data} 
                                    border={item.border}>
                                        <ProgramData>{item.date}</ProgramData>
                                        <ProgramDataTopic>{item.topic}</ProgramDataTopic>
                                        <ProgramData>{item.time}</ProgramData>
                                        <ProgramData>{item.place} </ProgramData>
                                    </ProgramTableRow>
                                    )
                                })
                            }
                        </ProgramTableBody>
                        }
                        { isBreakpoint &&  
                        <ProgramTableBody>
                            {data.map((item) => {
                                return(
                                    <ProgramTableRow key={item.topic} data={data} 
                                    border={item.border}>
                                        <ProgramDataRow>
                                            <ProgramData><ProgramIcon src='/images/icons/calendar.svg' />{item.date}</ProgramData>
                                            <ProgramData><ProgramIcon src='/images/icons/clock.svg' />{item.time}</ProgramData>
                                        </ProgramDataRow>
                                        <ProgramDataRow>
                                            <ProgramDataTopic>{item.topic}</ProgramDataTopic>
                                            <ProgramData><ProgramIcon src='/images/icons/gps.svg' />{item.place} </ProgramData>
                                        </ProgramDataRow>
                                    </ProgramTableRow>
                                    )
                                })
                            }
                        </ProgramTableBody>
                        }
                    </ProgramTable>
                    </ProgramWrapper>
                </Wrapper>
            </Container>
        </>
    )
}

export default Program
