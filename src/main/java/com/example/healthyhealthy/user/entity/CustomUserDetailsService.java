package com.example.healthyhealthy.user.entity;

import com.example.healthyhealthy.user.dao.UserDao;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.example.healthyhealthy.user.entity.User;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {
    private final UserDao userDao;
    @Override
    public UserDetails loadUserByUsername(String id) throws UsernameNotFoundException {
        User user = userDao.selectUser(id);

        if(user == null){
            throw new UsernameNotFoundException(id);
        }

        return new CustomUserDetails(user);
    }
}
