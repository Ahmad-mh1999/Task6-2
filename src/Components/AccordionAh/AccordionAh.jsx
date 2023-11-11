import './AccordionAh.css'
import 'react-accessible-accordion/dist/fancy-example.css';
import ImgAcc from './../../image/bg-1-sec6.jpeg'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
function AccordionAh() {
    return (
        <section id="section5" className="mt-5">
            <div className="container py-5">
                
                <div className='text-center text-whiht'>
                    <h1 className="fw-semibold">SEE WHY CUSTOMERS LOVE THE OUR MOBILES</h1>
                    <p className="fs-3 opacity-50  ">DESIGNED TO PERFECTION</p>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-sm-12 py-2">
                        <img src={ImgAcc} className="img-fluid w-100" alt="this is image" />
                    </div>
                    <div className="col-lg-6 col-sm-12 py-2">
                        <Accordion allowZeroExpanded>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What harsh truths do you prefer to ignore?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Exercitation in fugiat est ut ad ea cupidatat ut in
                                        cupidatat occaecat ut occaecat consequat est minim minim
                                        esse tempor laborum consequat esse adipisicing eu
                                        reprehenderit enim.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Is free will real or just an illusion?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        In ad velit in ex nostrud dolore cupidatat consectetur
                                        ea in ut nostrud velit in irure cillum tempor laboris
                                        sed adipisicing eu esse duis nulla non.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What harsh truths do you prefer to ignore?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Exercitation in fugiat est ut ad ea cupidatat ut in
                                        cupidatat occaecat ut occaecat consequat est minim minim
                                        esse tempor laborum consequat esse adipisicing eu
                                        reprehenderit enim.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What harsh truths do you prefer to ignore?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Exercitation in fugiat est ut ad ea cupidatat ut in
                                        cupidatat occaecat ut occaecat consequat est minim minim
                                        esse tempor laborum consequat esse adipisicing eu
                                        reprehenderit enim.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AccordionAh