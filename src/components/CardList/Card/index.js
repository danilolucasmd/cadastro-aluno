import React from 'react';
import { Row, Col, Popover, PopoverBody, Input, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import avatar from 'assets/avatar.jpeg';
import logo from 'assets/logo.png';
import styles from './styles.css';
import { v4 } from 'uuid';
import Webcam from 'react-webcam';

class Card extends React.Component {
    constructor() {
        super();

        this.id = v4();

        this.state = {
            target: `schoolName-${this.id}`,
        };
    }

    togglePopover = e => {
        this.setState({
            inputValue: this.props.card[e.target.id.substring(0, e.target.id.indexOf('-'))],
            target: e.target.id,
            isOpen: !this.state.isOpen,
        });
    };

    handleChange = e => {
        const target = this.state.target.substring(0, this.state.target.indexOf('-'));

        this.props.onChange(target, e.target.value)
    };

    handleTakePicture = () => {
        this.props.onChange('cardAvatar', this.camera.getScreenshot());
        this.setState({
            modal: false,
        });
    };

    render() {
        return (
            <div className={styles.component}>
                <div className='card'>
                    <Row noGutters={true}>
                        <Col xs='9'>
                            <div className='card-header'>
                                <Row noGutters={true}>
                                    <Col xs='2'>
                                        <img alt='' src={logo} />
                                    </Col>
                                    <Col xs='10'>
                                        <label>Prefeitura Municipal de Capela do Alto</label>
                                        <label>Secretaria Municipal de Educação</label>
                                        <label id={`schoolName-${this.id}`} onClick={this.togglePopover}>{this.props.card.schoolName}</label>
                                        <span className='address'>
                                            <label>
                                                <span className='pointer' id={`schoolStreet-${this.id}`} onClick={this.togglePopover}>
                                                    {this.props.card.schoolStreet}
                                                </span>, n°&nbsp;
                                                <span className='pointer' id={`schoolNumber-${this.id}`} onClick={this.togglePopover}>
                                                    {this.props.card.schoolNumber}
                                                </span>
                                            </label>
                                            <label>
                                                <span className='pointer' id={`schoolCity-${this.id}`} onClick={this.togglePopover}>
                                                    {this.props.card.schoolCity}
                                                </span>
                                                /
                                                <span className='pointer' id={`schoolState-${this.id}`} onClick={this.togglePopover}>
                                                    {this.props.card.schoolState}
                                                </span>
                                                &nbsp;-&nbsp;
                                                <span className='pointer' id={`schoolDistrict-${this.id}`} onClick={this.togglePopover}>
                                                    {this.props.card.schoolDistrict}
                                                </span>
                                                &nbsp;- Cep:&nbsp;
                                                <span className='pointer' id={`schoolCep-${this.id}`} onClick={this.togglePopover}>
                                                    {this.props.card.schoolCep}
                                                </span>
                                            </label>
                                            <label>
                                                Fone:&nbsp;
                                                <span className='pointer' id={`schoolPhone-${this.id}`} onClick={this.togglePopover}>
                                                    {this.props.card.schoolPhone}
                                                </span>
                                                &nbsp;Cel:&nbsp;
                                                <span className='pointer' id={`schoolCelular-${this.id}`} onClick={this.togglePopover}>
                                                    {this.props.card.schoolCelular}
                                                </span>
                                            </label>
                                        </span>
                                    </Col>
                                </Row>
                            </div>
                            <div className='card-title'>
                                <h3 className='pointer' id={`cardTitle-${this.id}`} onClick={this.togglePopover}>{this.props.card.cardTitle}</h3>
                                <h3 className='pointer' id={`cardYear-${this.id}`} onClick={this.togglePopover}>{this.props.card.cardYear}</h3>
                            </div>
                        </Col>
                        <Col xs='3'>
                            <div className='card-avatar'>
                                {/* <img alt='' src={this.props.card.cardAvatar || avatar} onClick={() => this.setState({modal: true})}/> */}
                                <div
                                    className='card-avatar-img'
                                    onClick={() => this.setState({modal: true})}
                                    style={{
                                        backgroundImage: 'url('+ this.props.card.cardAvatar +')',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        width: '100%',
                                        height: '100%',
                                    }}
                                >
                                </div>

                                <Modal
                                    isOpen={this.state.modal}
                                    size='lg'
                                >
                                    <ModalHeader toggle={this.toggle}>Foto do Aluno</ModalHeader>
                                    <ModalBody>
                                        <Webcam
                                            audio={false}
                                            ref={e => this.camera = e}
                                            screenshotFormat="image/jpeg"
                                            width={767}
                                        />
                                        <div
                                            className='card-avatar-img-frame'
                                            style={{
                                                border: '5px solid #5cff26',
                                                width: '330px',
                                                height: '430px',
                                                position: 'fixed',
                                                top: '105px',
                                                left: '240px',
                                            }}
                                        >

                                        </div>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={this.handleTakePicture}>Tirar Foto</Button>{' '}
                                        <Button color="secondary" onClick={() => this.setState({modal: false})}>Cancelar</Button>
                                    </ModalFooter>
                                </Modal>
                            </div>
                        </Col>
                    </Row>

                    <div className='card-student-info'>
                        <Row>
                            <Col xs='12'>
                                <label className='pointer' id={`studentName-${this.id}`} onClick={this.togglePopover}>{`Aluno(a): ${this.props.card.studentName}`}</label>
                            </Col>
                            <Col xs='6'>
                                <label>
                                    <span className='pointer' id={`studentYear-${this.id}`} onClick={this.togglePopover}>
                                        {this.props.card.studentYear}
                                    </span>
                                    ° ano&nbsp;
                                    <span className='pointer' id={`studentLetter-${this.id}`} onClick={this.togglePopover}>
                                        {this.props.card.studentLetter}
                                    </span>
                                </label>
                            </Col>
                            <Col xs='6'>
                                <label className='pointer' id={`studentPeriod-${this.id}`} onClick={this.togglePopover}>{`Período: ${this.props.card.studentPeriod}`}</label>
                            </Col>
                            <Col xs='12'>
                                <label>End.&nbsp;
                                    <span className='pointer' id={`studentStreet-${this.id}`} onClick={this.togglePopover}>
                                        {this.props.card.studentStreet}
                                    </span>
                                    , n°&nbsp;
                                    <span className='pointer' id={`studentNumber-${this.id}`} onClick={this.togglePopover}>
                                        {this.props.card.studentNumber}
                                    </span>
                                </label>
                            </Col>
                            <Col xs='6'>
                                <label className='pointer' id={`studentDistrict-${this.id}`} onClick={this.togglePopover}>{`Bairro: ${this.props.card.studentDistrict}`}</label>
                            </Col>
                            <Col xs='6'>
                                <label className='pointer' id={`studentPhone-${this.id}`} onClick={this.togglePopover}>{`Telefone: ${this.props.card.studentPhone}`}</label>
                            </Col>
                            <Col xs='12'>
                                <label className='signature-field'>__________________________________________________</label>
                            </Col>
                            <Col xs='12'>
                                <label className='signature-text'>Diretor(a) da Unidade</label>
                            </Col>
                        </Row>
                    </div>

                    <Popover
                        placement="bottom"
                        isOpen={this.state.isOpen}
                        target={this.state.target}
                    >
                        <PopoverBody>
                            <Input
                                type="text"
                                name="text"
                                placeholder="Digite o titulo"
                                onChange={this.handleChange}
                                onBlur={() => this.togglePopover({target: {id: 'schoolName'}})}
                                onKeyPress={e => {
                                    if(e.key === 'Enter')
                                        this.togglePopover({target: {id: 'schoolName'}});
                                }}
                                defaultValue={this.state.inputValue}
                                autoFocus
                                style={{width: '200px'}}
                            />
                        </PopoverBody>
                    </Popover>

                </div>
            </div>
        );
    }
}

export default Card;
