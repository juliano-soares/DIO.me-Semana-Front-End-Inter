import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Wrapper, Background, InputContainer, ButtonContainer } from './styles';

import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

import background from '../../assets/images/background-login.jpg';
import logoInter from '../../assets/images/Inter-orange.png';

import useAuth from '../../hooks/useAuth';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmed, setPasswordConfirmed] = useState('');
    
    const navigate = useNavigate();
    const {userSignUp} = useAuth();

    const handleToSignUp = async () => {
        if(password !== passwordConfirmed) {
            alert('Confirmação de senha inválida!');
            return;
        }

        const data = {
            firstName, lastName, email, password
        }

        try {
            const response = await userSignUp(data);
            
            if(response.id) {
                navigate('/dashboard');
                return;
            }
        } catch (error) {            
            alert('Não foi possível criar o novo usuário!')
        }
    }

    return (
        <Wrapper>
            <Background image={background} />
            <Card width="403px">
                <img src={logoInter} width={172} height={61} alt="logo inter" />
                
                <InputContainer>
                    <Input placeholder="NOME" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    <Input placeholder="SOBRENOME" value={lastName} onChange={e => setLastName(e.target.value)}/>
                    <Input placeholder="EMAIL" value={email} onChange={e => setEmail(e.target.value)}/>
                    <Input placeholder="SENHA" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <Input placeholder="COMFIRMAR SENHA" type="password" value={passwordConfirmed} onChange={e => setPasswordConfirmed(e.target.value)}/>
                </InputContainer>

                <ButtonContainer>
                    <Button type="button" onClick={handleToSignUp}>Entrar</Button>
                    <p>Já tem uma conta? <Link to="/">Entre Já</Link></p>
                </ButtonContainer>
            </Card>
        </Wrapper>
    )
}

export default SignUp;
