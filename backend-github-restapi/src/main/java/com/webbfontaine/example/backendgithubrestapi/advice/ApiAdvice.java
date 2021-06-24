package com.webbfontaine.example.backendgithubrestapi.advice;

import com.webbfontaine.example.backendgithubrestapi.exception.CustomGithubClientException;
import com.webbfontaine.example.backendgithubrestapi.pojo.RestResponsePojo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.ui.Model;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.BindException;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestControllerAdvice
@Slf4j
public class ApiAdvice {
    @ExceptionHandler({MethodArgumentNotValidException.class, BindException.class})
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public @ResponseBody
    List<ObjectError> handleMethodArgumentException(MethodArgumentNotValidException e, final Model model, HttpServletResponse response) {
        log.error("Exception during execution of application "+ e.getMessage());
        // List<ObjectError>  restPojo = new RestResponsePojo<>();
        log.info(e.getLocalizedMessage());
        BeanPropertyBindingResult beanPropertyBindingResult = (BeanPropertyBindingResult) e.getBindingResult();
        List<ObjectError> objectErrors = beanPropertyBindingResult.getAllErrors();
/*        String errorMessage = "Unable to process request. Validation error(s): ".concat(objectErrors
                .stream()
                .map(ObjectError::getDefaultMessage)
                .filter(m -> StringUtils.hasText(m) && !m.toLowerCase().contains("javax".toLowerCase()))
                .collect(Collectors.joining("; ")));*/


        return objectErrors;
    }
    @ExceptionHandler({CustomGithubClientException.class})
    // @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public @ResponseBody
    RestResponsePojo<String> handleCustomFeignClientException(CustomGithubClientException e, final Model model, HttpServletResponse response) {

        RestResponsePojo<String> restResponsePojo=new RestResponsePojo<>();

        restResponsePojo.setSuccess(false);
        restResponsePojo.setStatus(response.getStatus());

        restResponsePojo.setMessage(e.getMessage());
        return restResponsePojo;
    }

    @ExceptionHandler({Exception.class})
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public @ResponseBody
    String handleGeneralException(Exception e, final Model model, HttpServletResponse response) {
        log.error("Exception during execution of application "+ e.getMessage());
      e.printStackTrace();
        return "unexpected error processing request. Please try again later or contact help desk";
    }


}
