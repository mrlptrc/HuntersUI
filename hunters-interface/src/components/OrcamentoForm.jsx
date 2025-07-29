import React, { useState, useRef } from 'react';
import {
  Form,
  TextField,
  TextArea,
  Button,
  Heading,
  Content,
  Flex,
  Checkbox,
  ProgressCircle
} from '@adobe/react-spectrum';
import { motion, AnimatePresence } from 'framer-motion';

export default function OrcamentoForm({ isDark }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    whatsapp: '',
    cidade: '',
    descricao: '',
  });
  const [maiorDeIdade, setMaiorDeIdade] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const firstErrorRef = useRef(null);

  const themeClass = isDark ? 'text-light' : 'text-dark';

  const handleChange = (key, value) => {
    if (key === 'whatsapp') {
      value = value
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d{1,4})/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1');
    }
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const validateStep = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (step === 1) {
      if (!formData.nome.trim()) newErrors.nome = 'Informe seu nome.';
      if (!formData.sobrenome.trim()) newErrors.sobrenome = 'Informe seu sobrenome.';
      if (!formData.email.trim() || !emailRegex.test(formData.email))
        newErrors.email = 'E-mail inválido.';
      if (!formData.whatsapp.trim() || formData.whatsapp.length < 14)
        newErrors.whatsapp = 'Informe um WhatsApp válido.';
      if (!maiorDeIdade)
        newErrors.maiorDeIdade = 'Você deve confirmar que tem pelo menos 18 anos.';
    } else if (step === 2) {
      if (!formData.descricao.trim()) newErrors.descricao = 'Descreva sua ideia de tatuagem.';
    }

    setErrors(newErrors);

    setTimeout(() => {
      if (firstErrorRef.current) {
        firstErrorRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);

    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep(2);
  };

  const handleBack = () => setStep(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Enviado:', formData);
    alert('Formulário enviado com sucesso!');

    setFormData({
      nome: '',
      sobrenome: '',
      email: '',
      whatsapp: '',
      cidade: '',
      descricao: '',
    });
    setMaiorDeIdade(false);
    setStep(1);
    setErrors({});
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 px-4">
      <Flex direction="column" gap="size-200" alignItems="center">
        <Heading level={2} UNSAFE_className={`text-4xl font-bold ${themeClass}`}>
          Solicitar Orçamento
        </Heading>
        <Content UNSAFE_className={`mt-2 text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          <p>preencha o formulário para receber um orçamento</p>
        </Content>

        <div className="flex gap-2 mt-4">
          {[1, 2].map((s) => (
            <div
              key={s}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                s === step
                  ? isDark
                    ? 'bg-white scale-110'
                    : 'bg-black scale-110'
                  : 'bg-gray-400 opacity-50'
              }`}
            />
          ))}
        </div>
      </Flex>

      <div className="max-w-xl mx-auto mt-12">
        <Form onSubmit={handleSubmit} necessityIndicator="label" className="flex flex-col gap-6">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                <div className="flex gap-4">
                  <TextField
                    label="Nome"
                    value={formData.nome}
                    onChange={(v) => handleChange('nome', v)}
                    isRequired
                    necessityIndicator="icon"
                    width="100%"
                    validationState={errors.nome ? 'invalid' : undefined}
                    errorMessage={errors.nome}
                    ref={errors.nome && !firstErrorRef.current ? firstErrorRef : null}
                  />
                  <TextField
                    label="Sobrenome"
                    value={formData.sobrenome}
                    onChange={(v) => handleChange('sobrenome', v)}
                    isRequired
                    necessityIndicator="icon"
                    width="100%"
                    validationState={errors.sobrenome ? 'invalid' : undefined}
                    errorMessage={errors.sobrenome}
                  />
                </div>

                <div className="flex gap-4">
                  <TextField
                    label="E-mail"
                    value={formData.email}
                    onChange={(v) => handleChange('email', v)}
                    isRequired
                    necessityIndicator="icon"
                    type="email"
                    width="100%"
                    validationState={errors.email ? 'invalid' : undefined}
                    errorMessage={errors.email}
                  />
                  <TextField
                    label="WhatsApp"
                    value={formData.whatsapp}
                    onChange={(v) => handleChange('whatsapp', v)}
                    isRequired
                    necessityIndicator="icon"
                    type="tel"
                    width="100%"
                    validationState={errors.whatsapp ? 'invalid' : undefined}
                    errorMessage={errors.whatsapp}
                  />
                </div>

                <Checkbox
                  isSelected={maiorDeIdade}
                  onChange={setMaiorDeIdade}
                  validationState={errors.maiorDeIdade ? 'invalid' : undefined}
                  ref={errors.maiorDeIdade && !firstErrorRef.current ? firstErrorRef : null}
                  UNSAFE_className={isDark ? 'text-gray-200' : 'text-gray-700'}
                >
                  Eu confirmo que tenho pelo menos 18 anos no momento do preenchimento deste formulário.
                </Checkbox>

                <Button
                  variant="accent"
                  style="fill"
                  staticColor="black"
                  onPress={handleNext}
                  className="mt-4"
                  UNSAFE_className={isDark ? 'bg-white text-black hover:bg-gray-200' : ''}
                >
                  Próxima etapa
                </Button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                <TextArea
                  label="Fale um pouco sobre a sua ideia de tatuagem"
                  value={formData.descricao}
                  onChange={(v) => handleChange('descricao', v)}
                  isRequired
                  necessityIndicator="icon"
                  width="100%"
                  validationState={errors.descricao ? 'invalid' : undefined}
                  errorMessage={errors.descricao}
                />

                <Flex gap="size-150" marginTop="size-200" justifyContent="center">
                  <Button
                    variant="secondary"
                    onPress={handleBack}
                    isDisabled={isSubmitting}
                    UNSAFE_className={isDark ? 'bg-gray-700 text-white hover:bg-gray-600' : ''}
                  >
                    Voltar
                  </Button>

                  <Button
                    type="submit"
                    variant="accent"
                    style="fill"
                    staticColor="black"
                    isDisabled={isSubmitting}
                    UNSAFE_className={isDark ? 'bg-white text-black hover:bg-gray-200' : ''}
                  >
                    {isSubmitting ? <ProgressCircle size="S" isIndeterminate /> : 'Enviar'}
                  </Button>
                </Flex>
              </motion.div>
            )}
          </AnimatePresence>
        </Form>
      </div>
    </section>
  );
}
