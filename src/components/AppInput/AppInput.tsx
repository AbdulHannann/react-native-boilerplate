import React from 'react'
import { Controller, Control } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { KeyboardType, ImageSourcePropType, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as HP, widthPercentageToDP as WP } from 'react-native-responsive-screen'
import { styled } from 'styled-components/native'
import { AppText } from '../AppText'

interface IProps {
  name: string
  control: Control
  placeholder: string
  error?: string
  keyBoardType: KeyboardType
  maxLength?: number
  rightIcon?: ImageSourcePropType
  leftIcon?: ImageSourcePropType
  leftIconTintColor?: string
  noBottomMargin?: boolean
  inputFlex?: string
  readOnly?: boolean
  leftLabel?: string
  rightButtonText?: string
  rightButtonPress?: () => void
  regex?: RegExp
}

const TextInputField: React.FC<IProps> = ({
  placeholder,
  keyBoardType,
  maxLength,
  rightIcon,
  leftIcon,
  leftIconTintColor,
  noBottomMargin,
  inputFlex,
  control,
  name,
  error,
  readOnly,
  rightButtonPress,
  rightButtonText,
  leftLabel,
  regex,
}: IProps) => {
  const { t } = useTranslation()
  return (
    <InputWrapper noBottomMargin={noBottomMargin}>
      <FieldView>
        {leftIcon && <LeftIconImage source={leftIcon} leftIconTintColor={leftIconTintColor || ''} />}
        {leftLabel && <LeftLabel>{leftLabel}</LeftLabel>}
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <STextInput
              placeholder={placeholder}
              keyboardType={keyBoardType}
              maxLength={maxLength}
              autoCapitalize={'none'}
              secureTextEntry={name === 'password' || name === 'confirmPassword'}
              onBlur={onBlur}
              value={value}
              onChangeText={v => {
                if (!regex || regex.test(v) || v === '') {
                  onChange(v)
                }
              }}
              inputFlex={inputFlex}
              editable={!readOnly}
            />
          )}
        />
        {rightIcon && <RightIconImage source={rightIcon} />}
        {rightButtonText && (
          <TouchableOpacity activeOpacity={0.8} onPress={rightButtonPress}>
            <AppText color="primary">{rightButtonText}</AppText>
          </TouchableOpacity>
        )}
      </FieldView>
      {error && <ErrorText>{t(error)}</ErrorText>}
    </InputWrapper>
  )
}

const InputWrapper = styled.View<{ noBottomMargin?: boolean }>`
  margin-bottom: ${props => (props.noBottomMargin ? '0px' : `${HP('1.9%')}px`)};
`
const FieldView = styled.View`
  height: ${HP('6.2%')}px;
  padding-horizontal: ${WP('6%')}px;
  border-radius: ${WP('6.8%')}px;
  background: ${({ theme }) => theme.colors.accentDark2};
  flex-direction: row;
  align-items: center;
`
const STextInput = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.colors.accentLight3,
}))<{ inputFlex?: string }>`
  color: ${({ theme }) => theme.colors.white};
  height: 100%;
  font-size: ${({ theme }) => theme.fonts.md};
  flex: ${props => props?.inputFlex || '1'};
`
const LeftLabel = styled(AppText).attrs(() => ({
  variant: 'b2',
}))``
const LeftIconImage = styled.Image.attrs(() => ({
  resizeMode: 'contain',
}))<{ leftIconTintColor: string }>`
  margin-right: ${WP('4.5%')}px;
  tint-color: ${props => props?.leftIconTintColor};
  width: ${WP('5.2%')}px;
  height: ${WP('5.2%')}px;
`
const RightIconImage = styled.Image.attrs(() => ({
  resizeMode: 'contain',
}))`
  margin-left: ${WP('4.5%')}px;
  width: ${WP('5.2%')}px;
  height: ${WP('5.2%')}px;
`
const ErrorText = styled(AppText).attrs(() => ({
  variant: 'c2',
  color: 'failure',
}))`
  margin-top: ${HP('0.5%')}px;
`

export default TextInputField
